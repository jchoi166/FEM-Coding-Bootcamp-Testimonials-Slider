const track = document.querySelector(".test-slider__container")
const rightArrow = document.querySelector(".test-slider__nav-button--right")
const leftArrow = document.querySelector(".test-slider__nav-button--left")

// create array of slides by grabbing from dom
let slides = Array.from(track.children)

// put slides next to each other by calculating exact width 
let slideWidth = slides[0].getBoundingClientRect().width
console.log(slideWidth)

let setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px"
}

slides.forEach(setSlidePosition)

// Move slide function 
const moveSlide = (currentSlide, targetSlide) => {
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
    // console.log(currentSlide)
}

// Right Arrow Functionality

rightArrow.addEventListener("click", e => {
    console.log("button working!")
    let currentSlide = document.querySelector(".current-slide") 
    let targetSlide = currentSlide.nextElementSibling

    // Check to see if there is a slide to the right. If not, append previous slide to end of track
    // if (targetSlide) {
    //     // track.appendChild currentSlide.previousElementSibling
    //     console.log('there is no slide')
    // }

    // Transform track over the width of the slide
    track.style.transform = `translateX(-${slideWidth}px)`

    // Apply ".current-slide" class to new slide
    moveSlide(currentSlide, targetSlide)
})

// Left Arrow Functionality 

    // Check to see if there is a slide to the left. If not, append the last child slide to beginning of track
    
    // Transform track over the width of the slide