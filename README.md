# Project Overview

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|10/8| Wireframes / Priority Matrix / Timeline | Complete
|10/11| Core Application Structure (HTML, CSS, etc.) | Complete
|10/12| MVP & Bug Fixes* | Complete
|10/13| pMVP Work | Complete
|10/14| Project Descriptions & Final Touches | Complete
|10/15| Present | Complete


## Project Description

This is the portfolio I created for myself for my first major project at General Assembly. It's a relatively simple design for now that I look forward to expanding on as I continue to develop my skills!

## Google Sheet

Here is a Google Sheet with links to all of my projects:
[Google Sheets Link](https://docs.google.com/spreadsheets/d/10dseLqg5rq_-F-aNYAnlvRqAJIgtWsmZpOzLEzz__T8/edit?usp=sharing) 

## Wireframes

+ [Mobile - Main Page](https://res.cloudinary.com/dzrsoqrvd/image/upload/v1633723857/portfolio/Mobile%20-%20Main%20Page.png)
+ [Mobile - About](https://res.cloudinary.com/dzrsoqrvd/image/upload/v1633724204/portfolio/Mobile%20-%20About.png)
+ [Desktop - Main Page](https://res.cloudinary.com/dzrsoqrvd/image/upload/v1633723857/portfolio/Desktop%20-%20Main%20Page.png)
+ [Desktop - About](https://res.cloudinary.com/dzrsoqrvd/image/upload/v1633723857/portfolio/Desktop%20-%20About.png)


## Time/Priority Matrix 

[Link](https://res.cloudinary.com/dzrsoqrvd/image/upload/v1633726956/portfolio/Time%20Priority%20Matrix.png)

### MVP/PostMVP

#### MVP

+ ~~Site Design~~
+ ~~Initial HTML and Styling~~
+ ~~Hamburger Menu for Mobile~~
+ ~~Game Logic (what game TBD - connect 4, tic tac toe, etc)~~
+ ~~Responsive Design~~

#### PostMVP 

+ ~~Project Carousel~~
+ Add search bar with keywords on the projects, and keywords for socials that link to contact page - see To Do's

## Functional Components

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Site Design | H | 2hr | 2hr |
| Initial HTML and Styling | H | 2hr | 3hr |
| Hamburger Menu for Mobile | H | 1hr | 2hr | 
| Game Logic | H | 3hrs|  3hr | 
| Responsive Design | H | 2hr | 2hr |
| Total | H | 10hrs| 12hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Project Carousel | M | 2hr | .75hr |
| Search | M | 3hr | n/a |
| Total | H | 5hrs| .75hrs |

## Additional Libraries
jQuery is used for the desktop design's slideshow and for the hamburger menu for the mobile design.

## Code Snippet

Much of the HTML and CSS I used for the project slideshow was borrowed from [the W3 Schools How To - Slideshow page](https://www.w3schools.com/howto/howto_js_slideshow.asp). Thanks to them in particular for the styling of the 'next' and 'prev' arrows! I wrote the JavaScript for this functionality myself.

This is the JavaScript that I wrote to operate the slideshow for the projects. When the forward or back button (on the slideshow) is clicked it calls the "switchSlide" function. This function toggles the class "show-slide" which just has a 'display: block;' in it. The projects are hidden by default in desktop mode so toggling this on and off makes the image, project name, and description for the appropriate project pop up.

```
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
```

## Issues and Resolutions
The main issue I had with this site was implementing the hamburger menu on the mobile design. I ended up using a 1-row grid for the header and then adding a row for the menu when the hamburger menu was clicked, and then moving 'main' down using a .toggleClass on the 'move-main' class, which simply changes the margin-top by 50 pixels. 

## To-Do's
+ Search - not implemented at this time due to simplicity of site (only two pages, search seemed unnecessary). As site grows more complex this will become more important and will be implemented at a later date.