# Frontend Mentor - Profile card component solution

This is a solution to the [Profile card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/profile-card-component-cfArpWshJ).

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- Build out the project to the designs provided
- Use the assets provided
- Use any technology you want to test out

### Screenshot

![screenshot of the profile card component](./screenshot.png)

### Links

Here are the links to my solution on GitHub and the live page where you can check out the profile card on your browser.

- Solution URL: [Github Repo](https://github.com/web-shuriken/profile-card-component/)
- Live URL: [Profile Card Component Site](https://web-shuriken.github.io/profile-card-component/)

### Setup

The project does not require any setup. The SASS file has already been compiled to CSS for immediate use.
- Clone the repo
- Open folder and start playing with the code

## My process

### Built with

- Mobile first approach
- Semantic HTML5 markup
- CSS custom properties
- [SASS](https://sass-lang.com/) - CSS preprocessor

### What I learned

There are two things which I learned when working on this project:

1. `background-position`

It can be used to move the image used as a background in an element.. but is important to understand how the values in the property are used.

```css
background-image: url("images/bg-pattern-top.svg"), url("images/bg-pattern-bottom.svg");
background-position: right 52vw top -284px, left 45vw top 355px;
background-repeat: no-repeat;
background-size: cover;
```

2. SASS

It is easy to pick up and very useful. The appeal to use in large projects is obvious. Here is a very simple mixin:

```sass
@mixin rootSpecs($fontFamily: sans-serif, $fontSize: 18px)
  font-family: $fontFamily, sans-serif
  font-size: $fontSize
```

### Continued development

SASS preprocessor is still new to me and I would like to focus on developing this skill. It turned out to be helpful even on this small scale.

### Useful resources

The project was not hard but I did have to look up the CSS `background-position` property.
From all the pages I visited **only two** had useful information:

- [CSS Tricks](https://css-tricks.com/almanac/properties/b/background-position/) pointed out the 4 types of values you can use.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position) explains, in detail, how the values are taken and used by the property.

## Author

- Website - [Carlos E Alford M](https://carlosealford.com)
- Frontend Mentor - [WebShuriken](https://www.frontendmentor.io/profile/WebShuriken)
- Twitter - [@webshuriken](https://www.twitter.com/webshuriken)

## Acknowledgments

For all their hard work I say thank you. Your d

- [Chris Coyier @ CSS Tricks](https://css-tricks.com/author/chriscoyier/)
- [MDN Web Docs](https://developer.mozilla.org/en-US/)
