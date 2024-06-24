import $ from 'jquery'
window.jQuery = $
window.$ = $

document.addEventListener('DOMContentLoaded', () => {
	
	const learnButton = document.querySelector('.opening-main-button-element')
	const aboutSection = document.querySelector('.about')

	learnButton.addEventListener('click', () => {
		aboutSection.scrollIntoView({ behavior: 'smooth' });
		});		

})
