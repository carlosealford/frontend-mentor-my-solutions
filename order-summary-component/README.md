# Order summary card solution

This is one solution to the [Order summary card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/order-summary-component-QlPmajDUj).

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

## Overview

### The challenge

Users should be able to:

- See the component resize on large screens
- See hover states for interactive elements

### Screenshot

![screenshot of the order summary component](./screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/webshuriken/order-summary-component)
- Live URL: [Summary Component Site](https://webshuriken.github.io/order-summary-component/)

## My process

### Built with

- Mobile-first workflow
- Semantic HTML5 markup
- Custom CSS with Flexbox
- Version control Git

### What I learned

Something interesting happened while I was working on this project. When I compared the screenshot of the component against the page displayed by the browser the colours were not the same. The screenshot rendered a different colour.

The use of Hue, Saturation and Lightness (hsl) colour values was new and interesting way of looking at colours. I still need to dive a bit deeper.

Here is a little sample of the dask blue, in hsl values, used on the component:

```css3
body {
  --dark-blue: hsl(223, 47%, 23%);
  ...
}
```

### Continued development

Naming of CSS classes is currently not my strength. Something there is a struggle getting the right names to suit the elements purpose.

### Useful resources

- [CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Their flexbox reference is fantastic. Has all the information needed.

## Author

- Website - [Carlos E Alford M](https://carlosealford.com)
- Frontend Mentor - [WebShuriken](https://www.frontendmentor.io/profile/WebShuriken)
- Twitter - [@webshuriken](https://www.twitter.com/webshuriken)
