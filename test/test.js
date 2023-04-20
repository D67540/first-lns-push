// &GALLERY CAROUSEL JS

// // Get DOM elements
// const track = document.querySelector('.carousel__track');
// const slides = Array.from(track.children);
// const nextBtn = document.querySelector('.carousel__button--right');
// const prevBtn = document.querySelector('.carousel__button--left');
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

// // Calculate slide width
// const slideWidth = slides[0].getBoundingClientRect().width;

// // Set initial position of slides
// const setSlidePosition = (slide, index) => {
//     slide.style.left = slideWidth * index + 'px';
// };
// slides.forEach(setSlidePosition);

// // Move to target slide
// const moveToSlide = (track, currentSlide, targetSlide) => {
//     track.style.transform = `translateX(-${targetSlide.style.left})`;
//     currentSlide.classList.remove('current-slide');
//     targetSlide.classList.add('current-slide');
// };

// // Update dot indicators
// const updateDots = (currentDot, targetDot) => {
//     currentDot.classList.remove('current-slide');
//     targetDot.classList.add('current-slide');
// };

// // Hide/Show arrows based on target slide index
// const hideShowArrows = (slides, prevBtn, nextBtn, targetIndex) => {
//     if (targetIndex === 0) {
//         prevBtn.classList.add('is-hidden');
//         nextBtn.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevBtn.classList.remove('is-hidden');
//         nextBtn.classList.add('is-hidden');
//     } else {
//         prevBtn.classList.remove('is-hidden');
//         nextBtn.classList.remove('is-hidden');
//     }
// };

// // Handle click on previous arrow button
// prevBtn.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const prevSlide = currentSlide.previousElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const prevDot = currentDot.previousElementSibling;
//     const prevIndex = slides.findIndex(slide => slide === prevSlide);

//     moveToSlide(track, currentSlide, prevSlide);
//     updateDots(currentDot, prevDot);
//     hideShowArrows(slides, prevBtn, nextBtn, prevIndex);
// });

// // Handle click on next arrow button
// nextBtn.addEventListener('click', e => {
//     const currentSlide = track.querySelector('.current-slide');
//     const nextSlide = currentSlide.nextElementSibling;
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const nextDot = currentDot.nextElementSibling;
//     const nextIndex = slides.findIndex(slide => slide === nextSlide);

//     moveToSlide(track, currentSlide, nextSlide);
//     updateDots(currentDot, nextDot);
//     hideShowArrows(slides, prevBtn, nextBtn, nextIndex);
// });

// // Handle click on dot indicator
// dotsNav.addEventListener('click', e => {
//     const targetDot = e.target.closest('button');
//     if (!targetDot) return;

//     const currentSlide = track.querySelector('.current-slide');
//     const currentDot = dotsNav.querySelector('.current-slide');
//     const targetIndex = dots.findIndex(dot => dot === targetDot);
//     const targetSlide = slides[targetIndex];

//     moveToSlide(track, currentSlide, targetSlide);
//     updateDots(currentDot, targetDot);
//     hideShowArrows(slides, prevBtn, nextBtn, targetIndex);
// });


