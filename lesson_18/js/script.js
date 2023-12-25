const icon = document.querySelector('.header__burger');
icon.addEventListener('click', function() {
	document.documentElement.classList.toggle('active');
	
});

// $(document).ready(function() {
// 	$('.header__burger').click(function(event) {
// 		$('.body').toggleClass('open');
// 	});
// });