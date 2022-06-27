document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

	const button = document.querySelector('.menu__icon') // находим кнопку для открытия/закрытия окна навигации
	const nav = document.querySelector('.menu__body') // находим окно навигации
	const main = document.querySelector('.page') // находим основную стрицу

	button.addEventListener('click', () => { // при клике на кнопку
		nav.classList.toggle('on') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
		button.classList.toggle('active') // добаляем/удаляем активный класс кнопке
		main.classList.toggle('block') // добаляем/удаляем активный класс основной странице
	})
});

const list = document.querySelectorAll('.menu__link')
list.forEach(item => {
	item.addEventListener('click', (e) => {
		list.forEach(el => { el.classList.remove('blue'); });
		item.classList.add('blue')
	})
});

$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_header(w, h) {
	var headerMenu = $('.menu__body');
	var headerSocial = $('.social-header__items');
	// =============  Условие которое перекидывает классы
	if (w < 768) {
		if (!headerSocial.hasClass('done')) {
			headerSocial.addClass('done').prependTo(headerMenu);
		}
	} else {
		if (headerSocial.hasClass('done')) {
			headerSocial.removeClass('done').appendTo($('.header__social'));
		}
	}
	// ====================================================
}
function adaptive_function() {
	var w = $(window).outerWidth();
	var h = $(window).outerHeight();
	adaptive_header(w, h);
}
adaptive_function();

function ibg() {

	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();

$(document).ready(function () {
	$('.slider-planyourlife').slick({
		arrows: true,
		dots: true,
		adaptiveHeigth: true,
		waitForAnimate: false,
	});
});

$(document).ready(function () {
	$('.startreading__block-slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeigth: true,
		waitForAnimate: false,
	});
});

$(document).ready(function () {
	$('.slider-testimonials').slick({
		arrows: false,
		dots: true,
		variableWidth: true,
		slidesToShow: 1,
		adaptiveHeigth: false,
		waitForAnimate: false,
		responsive: [
			{
				breakpoint:2561,
				settings: {
					variableWidth: false,
				}
			},
			{
			breakpoint:1810,
				settings: {
					variableWidth: true,
				}
			},
			{
			breakpoint:1023,
			settings: {
				variableWidth: false,
			}
		}
	]
	});
});

$(document).ready(function () {
	$('.block-spoiler__title').click(function(event) {
		$(this).toggleClass('open').next().slideToggle(300);
	});
});