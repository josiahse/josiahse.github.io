$('.fa-bars').on('click', function(event){
    event.preventDefault;
    $('.nav-box').toggleClass('show-nav')
    $('main').toggleClass('move-main')
});

let slideIndex = 1;

//dir will either be +1 or -1 depending on whether "next" or "prev" is clicked
const switchSlide = (dir) => {
    $(`.proj${slideIndex}`).toggleClass('show-slide');
    slideIndex += dir;
    //enable proper looping of slides
    if (slideIndex === 5){
        slideIndex = 1;
    } else if (slideIndex === 0) {
        slideIndex = 4;
    }
    $(`.proj${slideIndex}`).toggleClass('show-slide');
}

$('.next').on('click', function(event) {
    event.preventDefault;
    switchSlide(1);
});

$('.prev').on('click', function (event) {
    event.preventDefault;
	switchSlide(-1);
});