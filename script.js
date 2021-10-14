$('.fa-bars').on('click', function (event) {
	event.preventDefault;
	$('.nav-box').toggleClass('show-nav');
	$('main').toggleClass('move-main');
});

let slideIndex = 1;

//dir will either be +1 or -1 depending on whether "next" or "prev" is clicked
const switchSlide = (dir) => {
	//hide the current slide
	$(`.proj${slideIndex}`).toggleClass('show-slide');
	slideIndex += dir;
	//automatically detect how many projects are listed and properly cycle through them
    //note: will not work if the class of the last li is not formatted 'project proj#'
	lastSlideIndex = parseInt(
		$('.projects').find('>li:last-of-type').attr('class').at(-1)
	);
	if (slideIndex === lastSlideIndex + 1) {
		slideIndex = 1;
	} else if (slideIndex === 0) {
		slideIndex = lastSlideIndex;
	}
	//show the next slide
	$(`.proj${slideIndex}`).toggleClass('show-slide');
};

$('.next').on('click', function (event) {
	event.preventDefault;
	switchSlide(1);
});

$('.prev').on('click', function (event) {
	event.preventDefault;
	switchSlide(-1);
});
