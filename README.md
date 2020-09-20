# Udacity-Landing-page
This project is for Udacity's **Front End Front End Nanodegree** program. 
HTML and CSS starter code provided by *Udacity*.

## Table of Contents

* [Description](#Description)
* [Index.html](#Index)
* [Styles.css](#Styles)
* [App.js](#app)
* [view project](#Running)

### Description

This is a basic landing page :
* uses Javascript to create a NavBar dynamically.
* The number of Nav Bar items varies according to the number of sections
* uses Javascript to highlight sections when scrolled.
* has **To Top Button** to scroll page up if page scrolled down.
* Clicking on the NavBar item scrolls to the section

## Index
This file represents the skeleton of the landing page. Within the header, you'll find the navigation outlined. Within the body, there are five sections that are added by javascript which has written in **app.js**.
Right now, there is simply filler text here but this can be easily fixed in the future (This is just for Tisting).

## Styles
Most of the code here was taken from the skelton code provided by Udacity. This gives the landing page the look and feel that you see and experience.
But I've made some Changes **like**
* add Style to **To Top Button**.
* add hover animation on the active navigation header.


## app
Here is where the functionality happens. There is three things that this file primarily achieves
* dynamically building out the navigation
* loop through the number of implemented sections and generate an area in the header for each one
* allowing the header to show which section is currently "active" in the page
* listens for clicks on the navigation and then scrolls the page to the appropriate section header
* Scrolling to the top of the page after scrolling down when pressing the **To Top** button

### Running
The project is published on GitHub Pages. To view, 
click on this link: [link to project](https://htmlpreview.github.io/?https://github.com/ahmedtelbani/Udacity-Landing-page/blob/master/index.html)
