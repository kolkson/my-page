// menu
document.querySelector('.nav__burger').addEventListener('click', () => {
    document.querySelectorAll('.nav .fas').forEach(burger => burger.classList.toggle('off'))
})
document.querySelector('.nav__burger').addEventListener('click', () => {
    document.querySelector('.nav__container').classList.toggle('nav__container--active')
})

// slider
const slideList = [{
    img: "./images//monitor.jpg"
},
{
    img: "./images//laptop.jpg"
},
{
    img: "./images//tablet.jpg"
},
{
    img: "./images//phone.jpg"
}]

const slideTime = 4000;
let activeSlide = 0;
const slideImages = document.querySelector('.header__image')
const dots = [...document.querySelectorAll('.slider__dots span')]
const leftArrowSlide = document.querySelector('.fa-long-arrow-alt-left')
const rightArrowSlide = document.querySelector('.fa-long-arrow-alt-right')

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('dot-active'));
    dots[activeDot].classList.remove('dot-active');
    dots[activeSlide].classList.add('dot-active');
}
const changeSlide = () => {
    activeSlide++;
    if (activeSlide === slideList.length)
        activeSlide = 0;

    slideImages.src = slideList[activeSlide].img
    changeDot()
}

const changeSlideLeft = () => {
    clearInterval(indexInterval)
    activeSlide--
    if (activeSlide < 0)
        activeSlide = slideList.length - 1;

    slideImages.src = slideList[activeSlide].img
    changeDot()
    indexInterval = setInterval(changeSlide, slideTime)
}

const changeSlideRight = () => {
    clearInterval(indexInterval)
    activeSlide++
    if (activeSlide === slideList.length)
        activeSlide = 0;

    slideImages.src = slideList[activeSlide].img
    changeDot()
    indexInterval = setInterval(changeSlide, slideTime)
}


let indexInterval = setInterval(changeSlide, slideTime)

leftArrowSlide.addEventListener('click', changeSlideLeft);
rightArrowSlide.addEventListener('click', changeSlideRight);



// machine writing
const headerTitle = document.querySelector('.header__title')
const textTitle = 'Creating websites for every device';
let textIndex = 0

const addLetter = () => {
    headerTitle.textContent += textTitle[textIndex];
    textIndex++;
    if (textIndex === textTitle.length)
        clearInterval(indexTyping)
}
const indexTyping = setInterval(addLetter, 80);





