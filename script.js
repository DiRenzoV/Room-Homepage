const slider = document.querySelector('.slider')
const track = slider.querySelector('.slider__track')
const slides = Array.from(track.querySelectorAll('.slide'))
const prevButton = document.querySelector('[data-prev-button]')
const nextButton = document.querySelector('[data-next-button]')
const hamburger = document.querySelector('.hamburger')



// block-slider

const blockSliderTrack = document.querySelector('[data-block-slider-track]')
const blockSlides = [...blockSliderTrack.children]





// Arrange slides next to one another

const slideWidth = slides[0].getBoundingClientRect().width

// slides[0].style.left = slideWidth * 0 + 'px';
// slides[1].style.left = slideWidth * 1 + 'px';
// slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)
blockSlides.forEach(setSlidePosition)

const moveToBlock = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
  currentSlide.classList.remove('current-block-slide')
  targetSlide.classList.add('current-block-slide')
}

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
  currentSlide.classList.remove('current-slide')
  targetSlide.classList.add('current-slide')
}


// When i click left, Move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling;
  const currentIndex = slides.indexOf(currentSlide)
  const currentBlockSlide = blockSliderTrack.querySelector('.current-block-slide')
  const prevBlock = currentBlockSlide.previousElementSibling;
  
  if (currentIndex === 0) return
  
  moveToSlide(track, currentSlide, prevSlide) 

  moveToBlock(blockSliderTrack, currentBlockSlide, prevBlock)

})

// When i click right, Move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling;
  const currentIndex = slides.indexOf(currentSlide)
  const currentBlockSlide = blockSliderTrack.querySelector('.current-block-slide')
  const nextBlock = currentBlockSlide.nextElementSibling;

  if (currentIndex === 2) return

  moveToSlide(track, currentSlide, nextSlide)  
  moveToBlock(blockSliderTrack, currentBlockSlide, nextBlock) 
})


hamburger.addEventListener('click', e => {
  const menu = document.querySelector('.menu');

  menu.classList.toggle('open')
  hamburger.classList.toggle('open')
})
