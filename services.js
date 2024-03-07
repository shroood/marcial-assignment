window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 500) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});

	const menu_btn = document.querySelector('.hamburger');
	const mobile_menu = document.querySelector('.mobile-nav');

	menu_btn.addEventListener('click', function () {
		menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
	});

	window.addEventListener('scroll', function () {
    var bottomNav = document.querySelector('.bottom-nav');
    var footer = document.querySelector('footer');
    // Get the distance between the top of the footer and the top of the viewport
    var footerTop = footer.getBoundingClientRect().top;
    // If the top of the footer is within the viewport
    if (footerTop < window.innerHeight) {
      // Hide the bottom navigation
      bottomNav.style.transform = 'translateY(100%)'; // Move the bottom nav out of the viewport
    } else {
      // Show the bottom navigation
      bottomNav.style.transform = 'translateY(0)'; // Reset the position of the bottom nav
    }
  });
}