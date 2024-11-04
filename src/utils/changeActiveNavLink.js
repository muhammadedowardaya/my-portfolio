const callback = (entries) => {
	const navListItems = document.querySelectorAll('.nav-list .nav-item');
	entries.forEach((entry) => {
		const link = document.querySelector(`.nav-list .nav-item a[href='#${entry.target.id}']`);
		if (entry.isIntersecting) {
			navListItems.forEach((navLink) => {
				navLink.classList.remove('active');

                if(navLink.querySelector(`a`).getAttribute('href') === `#${entry.target.id}`){
                    navLink.classList.add('active')
                }
			});

			console.info('terlihat id :', entry.target.id);
		}
	});
};

const observer = new IntersectionObserver(callback, {
	root: null,
	threshold: 0.1,
});

const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});
