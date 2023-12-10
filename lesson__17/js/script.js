const icon = document.querySelector('.header__burger');
icon.addEventListener('click', function() {
	document.documentElement.classList.toggle('active');
});
const scroll = document.querySelector('body');
icon.addEventListener('click', function() {
	document.documentElement.classList.toggle('lock');
});