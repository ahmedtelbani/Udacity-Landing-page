/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// declare fragment
const fragment = document.createDocumentFragment();
const sectionList = document.querySelectorAll('section');
const navBarList = document.getElementById('navbar__list');
const pageHeader = document.querySelector(".page__header");
const topBtn = document.getElementById("topBtn");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavigation(){
    for (item of sectionList){
        const newMenuItem = document.createElement(`li`);
        const sectionName = item.getAttribute(`data-nav`);
        const sectionId = item.getAttribute(`id`);
        newMenuItem.innerHTML = `<a class ="menu__link" data-id="${sectionId}">${sectionName}</a>`;
        fragment.appendChild(newMenuItem);
    }
    navBarList.appendChild(fragment);
}


// check which element is active
function getActiveElem() {
    let maxSection = sectionList[0];
    let minVal = 1000000;
    for (item of sectionList) {
        let bounding = item.getBoundingClientRect();
        if (bounding.top > -300 & bounding.top < minVal) {
            minVal = bounding.top;
            maxSection = item;
        };
    };
    return maxSection;
};



// Add class 'active' to section when near top of viewport
function setActive () {
    window.addEventListener('scroll', function (event) {
        let section = getActiveElem();
        section.classList.add('your-active-class');
        // set other sections as inactive
        for (let item of sectionList) {
            if (item.id != section.id & item.classList.contains('your-active-class')) {
                item.classList.remove('your-active-class');
            }
        }


        // set corresponding header style
        const active = document.querySelector(`a[data-id="${section.id}"]`);
        active.classList.add('active__link');
        // remove from other headers
        const headers = document.querySelectorAll('.menu__link');
        for (let item of headers) {
            //console.log(item);
            if (item.dataset.id != active.dataset.id & item.classList.contains('active__link')) {
                item.classList.remove('active__link');
            }
        };

        
    });
};


//
function showNavWhileScrolling(){
    var time;

    document.addEventListener('scroll',function(e){
        let currentScrollPos = window.pageYOffset;
        if(currentScrollPos > 500){
        pageHeader.style.top = "0px";
        clearTimeout(time);
        checkScroll();
        }else{
            pageHeader.style.top = "0px";
            clearTimeout(time);
        }
    });

    function checkScroll(){
        time = setTimeout(function(){
            pageHeader.style.top = "-53px";
        },1000); // the timer can be increase or reduse
    }
}


	
// scroll to Top Button ...
function scrollToTop(){
    window.onscroll = function(){

        let currentScrollPos = window.pageYOffset;

        if(currentScrollPos > 500){
            topBtn.style.display = "block";
        }else {
            topBtn.style.display = "none";
        }
    }

    topBtn.addEventListener("click", function(event){
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}





// Scroll to anchor ID using scrollTO event
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildNavigation();
showNavWhileScrolling();

// Scroll to section on link click
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
});

// scroll To Top ...
scrollToTop();

// Set sections as active
setActive();
