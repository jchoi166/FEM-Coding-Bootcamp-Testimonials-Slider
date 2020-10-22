let track = document.querySelector(".test-slider__container")
const rightArrow = document.querySelectorAll(".test-slider__nav-button--right")
const leftArrow = document.querySelectorAll(".test-slider__nav-button--left")

// create array of slides by grabbing from dom
let slides = Array.from(track.children)

// put slides next to each other by calculating exact width 
let slideWidth = slides[0].getBoundingClientRect().width
// console.log(slideWidth)
let setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px"
}
slides.forEach(setSlidePosition)

// Move slide function 
// const moveSlide = (currentSlide, targetSlide) => {
//     currentSlide.classList.remove('current-slide')
//     targetSlide.classList.add('current-slide')
// }

// Get new slides array
const newSlideArray = () => {
    track.style.transform = "translateX(0px)"
    // track = document.querySelector(".test-slider__container")
    // slides = Array.from(track.children)
    // slides.forEach(setSlidePosition)

}
// Right Arrow Functionality

rightArrow.forEach(item => {
    item.addEventListener("click", e => {
        console.log("right arrow button working!")
        // Transform track over the width of the slide
        track.style.transform = `translateX(-${slideWidth}px)`
        track.appendChild(track.firstElementChild)
        // newSlideArray()

        // Apply ".current-slide" class to new slide
        // let currentSlide = track.querySelector(".current-slide") 
        // let targetSlide = currentSlide.nextElementSibling
        // console.log(targetSlide)
        // moveSlide(currentSlide, targetSlide) 
        
        // slides.reverse()
        console.log(track)
        



        // Move previous slide to next slide
        
        
    })
})

leftArrow.forEach(item => {
    item.addEventListener("click", e => {
        // console.log("left arrow button working!")
        newSlideArray()
    })
})

console.log("original" + slides)

// Left Arrow Functionality 

    // Check to see if there is a slide to the left. If not, append the last child slide to beginning of track
    
    // Transform track over the width of the slide