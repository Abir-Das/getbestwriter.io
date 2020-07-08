//------------------navbar js----------------------
window.addEventListener('scroll', _ => {
	const scroll = window.scrollY
	const fixedTop = document.querySelector('.fixed-top');

	if(scroll < 200) {
		fixedTop.classList.remove('scrolling')
	} else {
		fixedTop.classList.add('scrolling')
	}
})
//-----------------end navbar js----------------------