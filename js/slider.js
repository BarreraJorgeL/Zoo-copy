const slides = document.querySelector(".slides");
const slide = Array.from(slides.children);
var slideWidth = slide[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) =>{
    slide.style.left = 100 * index +'%';
};

const moveToSlide = (slides, currentSlide, targetSlide) => {
    slides.style.transform = 'translateX(-'+targetSlide.style.left+')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
const autoNavigation = (slides, slide) =>{

    const currentSlide = slides.querySelector('.current-slide');

    if(currentSlide === slide[slide.length - 1]){
        moveToSlide(slides, currentSlide, slide[0]);
    }
    else{
        moveToSlide(slides, currentSlide, currentSlide.nextElementSibling);
    }
}

slide.forEach(setSlidePosition);

setInterval(autoNavigation, 5000, slides, slide);