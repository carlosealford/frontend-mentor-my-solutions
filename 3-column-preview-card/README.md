# 3-column preview card component solution

My solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Setup](#setup)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview 👋

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![preview of cards on desktop](./desktop-screenshot.jpg)

### Links

- Solution URL: [Github Repo](https://github.com/CarlosEAM/3-column-preview-card)
- Live URL: [3 Columns Preview Site](https://carloseam.github.io/3-column-preview-card/)

## Setup

The project has a live URL, as above, if you just want to have a look at it.

To use locally, just clone the repo and open the `index.html` file in your browser or run a local server within the project folder. SASS has already been pre-compiled so the project will just work.

## My process

### Built with

- Mobile first approach
- Semantic HTML5 markup
- CSS custom properties
- [SASS](https://sass-lang.com/) - CSS preprocessor
- Git - version control

### What I learned

I learned how to use SASS **Extend/Inheritance**. Used it to create the active states for the link which is used in each card. Made it easier to maintain.

```sass
%active-states
  background: hsla(var(--neutral-bg-color), 0)
  border: .15rem solid var(--neutral-bg-color)
  color: var(--neutral-bg-color)
  padding: .85rem 1.95rem
```

### Continued development

HTML and CSS are getting stronger but I still feel that my SASS needs some more work. Will keep focusing on this in future projects.

### Useful resources

- [SASS parent selector](https://sass-lang.com/documentation/style-rules/parent-selector) - This helped understand how to use pseudo-classes in SASS.

## Author

- Website - [Carlos E Alford M](https://carlosealford.com)
- Frontend Mentor - [CarlosEAM](https://www.frontendmentor.io/profile/CarlosEAM)
- Twitter - [@webshuriken](https://www.twitter.com/webshuriken)
