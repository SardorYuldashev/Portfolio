(function(){
    const leftBlock = document.querySelector('.left__block');
const menu = document.querySelector('.header__nav-btn');
const wrapper = document.querySelector('.wrapper');
const filter = document.querySelector('.filter')
const body = document.querySelector('body')


// Боковой панель чикиши start
menu.addEventListener('click', (e) => {
    e.preventDefault();
    leftBlock.classList.toggle('left__block-active')
    wrapper.classList.toggle('wrapper__active')
    setTimeout(filter.classList.toggle('main__black-filter'), 500)
    menu.classList.toggle('header__nav-btn-active')
    body.classList.toggle('body__active')
})
// Боковой панель end

const resume = document.querySelector('.main__info-resume');
const resumeTop = document.querySelector('.main__info-resume-top');
const paper = document.querySelector('.main__info-resume-paper')

resume.addEventListener('click', () => {
    resumeTop.classList.toggle('resume__top-active');
    setTimeout(() => {paper.style.zIndex = 4; paper.style.top = "45%"}, 1000)
})

setTimeout(() => {
    resume.classList.add('resume__avtive')
}, 1000)
// ***************************************************
const li1 = document.querySelector('.li1')
const li2 = document.querySelector('.li2')
const li3 = document.querySelector('.li3')
const liIcon = document.querySelector('.main__social-item')

liIcon.addEventListener('mouseover', (e) => {
    e.preventDefault();
    li1.classList.add('li1__active');
    li2.classList.add('li2__active');
    li3.classList.add('li3__active');
})

liIcon.addEventListener('mouseout', (e) => {
    e.preventDefault();
    setTimeout(() => {
        li1.classList.remove('li1__active');
    li2.classList.remove('li2__active');
    li3.classList.remove('li3__active');
    }, 3000)
})

// ***************** Эффект печатной машины
const cmdText = ['Привет! Меня зовут Сардор. \n Я начинающий фронтенд разработчик и это мое портфолио. Хочу вам продемонстрировать несколько своих работ. 🙃'];


function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let showText = document.querySelector('.main__show-text')

    function typeLine(){
        // рисуем строку
        let interval = setTimeout(function(){
            out += cmdText[line][count];
            showText.innerHTML = out + '|';

            count++;
            // Проверки
            if (count >= cmdText[line].length) {
                count = 0;
                line++;
                if (line == cmdText.length) {
                    clearTimeout(interval) //Остановил таймоут
                    showText.innerHTML = out
                    return true
                }
            }
            typeLine();
        },getRandomInt(getRandomInt(200*2.5)));
    }
    typeLine();
}

function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
}

setTimeout(typeText, 4000)
// ***************************** clock
window.onload = function () {
    window.setInterval(function() {
        let date = new Date();

        let hour = date.getHours();
        let minut = date.getMinutes();
        let second = date.getSeconds();

        if (hour < 10) hour = "0" + hour
        if (minut < 10) minut = "0" + minut
        if (second < 10) second = "0" + second

        document.querySelector('.show__clock-hour').innerHTML = hour
        document.querySelector('.show__clock-minut').innerHTML = minut
        document.querySelector('.show__clock-second').innerHTML = second

    }, 1000);
}

// ************************************* parallax
function parallax(event) {
    this.querySelectorAll('.main__parallax-layer').forEach(layer => {
        let speed = layer.getAttribute('data-speed')
        layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax)
// ********************************************* slider
let prevSlide = document.querySelector('.main__slider-prev');
let nextSlide = document.querySelector('.main__slider-next');
let slideIndex = 1;

prevSlide.addEventListener('click', (e) => {
    e.preventDefault();
    plusSlides(-1);
})

nextSlide.addEventListener('click', (e) => {
    e.preventDefault();
    plusSlides(1);
})

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.main__slider-slides');

    if (n > slideIndex.length || n > 3) {
        slideIndex = 1
    } else if (n < 1) {
        slideIndex=slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }

    slides[slideIndex-1].style.display = 'block';
}

setInterval(() => {plusSlides(1)}, 2500)    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!*!*!*!*!
// ********************************************* figma block
const figmaBtn = document.querySelector('.main__figma-btn');
const cardFigma = document.querySelector('.main__figma-container');

figmaBtn.addEventListener('click', (e) => {
    e.preventDefault()
    cardFigma.classList.toggle('figma__active');
    if (figmaBtn.innerHTML == 'Поднять карточек') {
        figmaBtn.innerHTML = 'Положить карточек'
    } else if (figmaBtn.innerHTML == 'Положить карточек') {
        figmaBtn.innerHTML = 'Поднять карточек'
    }
})
})()