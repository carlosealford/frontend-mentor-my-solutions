# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![Tip calculator preview](./screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/web-shuriken/tip-calculator)
- Live URL: [Tip Calculator Site](https://web-shuriken.github.io/tip-calculator/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Grid
- Mobile-first workflow
- SASS
- JavaScript ES6

### What I learned

There are many things I learned while working on this project. Using CSS Grid in one of them. The amount of control it gives you over the layout of the elements is incredible. The elements dont even have to be in the order they will appear on the screen. You can use grid to place them anywhere on the page.. It is fantastic!

```sass
.tip-calc__body
  display: grid
  grid-template-columns: auto
  grid-template-rows: repeat(4, auto)
  border-radius: 1.4rem
  padding: 2rem
  background: $calculator-bg-color
  @media (min-width: 768px)
    column-gap: 1rem
    grid-template-columns: 1fr 1fr
    grid-template-rows: auto auto auto
```

### Continued development

This project showed me that there are a few bits which I need to work on some more.

- JavaScript modules. The different patterns and best time to use them.
- CSS Grid - Even though I am more comfortable now, it has a lot of properties which I still need to play with and understand.
- SASS - using mixing and Extend/Inheritance

### Useful resources

- [CSS-TRICKS - grids](https://css-tricks.com/snippets/css/complete-guide-grid/) - Their guide for CSS grids is fantastic. Each section has a visual example which really helps to understand what a property does.
- [MDN Web Docs - data](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) - Small documentation but it says what you need to know about using the HTML `data-` attribute.

## Author

- Website - [Carlos E Alford M](https://carlosealford.com)
- Frontend Mentor - [WebShuriken](https://www.frontendmentor.io/profile/WebShuriken)
- Twitter - [@webshuriken](https://www.twitter.com/webshuriken)

## Acknowledgments

Credit goes to the documentation and the people involved in writing it. See the **Useful resources** section.
