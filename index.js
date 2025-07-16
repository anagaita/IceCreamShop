const track = document.querySelector('.carousel-track')
const slides = Array.from(track.children) /* creates an array with the list elements  - 0-8 */
const leftBtn = document.querySelector('.carousel-btn-left')
const rightBtn = document.querySelector('.carousel-btn-right')

const slideWidth = slides[0].getBoundingClientRect().width

/* arrange the slides next to one another */
const setSlidePosition = (slide, index) => {
    slide.style.left = `${slideWidth * index}px`
}
slides.forEach(setSlidePosition)

const moveToSlide = (track, currentSlide, targetSlide) => {  /* function to move slides */
    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

rightBtn.addEventListener('click', e => { /* move to next slide */
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    
    moveToSlide(track, currentSlide, nextSlide)
    
})

leftBtn.addEventListener('click', e => { /* move to previous slide */
    const currentSlide = track.querySelector('.current-slide')
    const previousSlide = currentSlide.previousElementSibling

    moveToSlide(track, currentSlide, previousSlide)
}) 