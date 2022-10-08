# Frontend Mentor - Stats preview card component

Coding Challenge - Design a Stats preview card component.

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

Your challenge is to build out this card component and get it looking as close to the design as possible. The `/design` folder contains both the mobile and desktop designs.

Use your personal judgement to choose the font family, size and padding.

All assets are in the `/images` folder.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

Here are two screenshot of the final card.

![Sceenshot of the desktop version of stats preview card](./screenshot.png)

### Links

- Solution URL: [Github Repo](https://github.com/web-shuriken/stats-preview-card-component)
- Live URL: [Stats Preview Card Site](https://web-shuriken.github.io/stats-preview-card-component/)

## My process

### Built with

- Mobile-first approach
- Semantic HTML5 markup
  - Testing out the Picture element
- Custom CSS with Flexbox
- Version control Git
- Atom - text editor

### What I learned

I put into practice the BEM methodology. Using this approach increased readability
of class names and made it easier to come up with the names. Now it feels class
names have more of a purpose.
This naming convention still new to me, however it was useful and will continue to practice it.

The other new features I practice was the HTML5 `<picture>` element. I must say
using it was easier than expected. Here is a little snipped:
```html
<picture>
  <source media="(min-width: 1200px)" srcset="./images/image-header-desktop.jpg">
  <img src="./images/image-header-mobile.jpg" aria-hidden="true" class="stats-card__hero">
</picture>
```

Initially I tried the `srcset` and `size` attributes inside the `<img>` tag unsuccessfully
only to find out that the browser will load the largest image in the cache regardless
of what the attributes say to do... _I need more practice on this_.

Lastly there is a CSS property which is new to me called `mix-blend-mode` which is
to blend an elements content with its parent content. Here a little sample used on
my code:
```css
.stats-card__hero-wrapper {
  background: var(--card-accent);
}
.stats-card__hero {
  display: block;
  height: auto;
  mix-blend-mode: multiply;
  opacity: .8;
  width: 100%;
}
```

### Continued development

Here are some of the items I must further develop:
- BEM methodology
- img attributes `srcset` and `size`

### Useful resources

- [Mozilla Picture element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) - Mozilla with its fantastic docs

## Author

- Website - [Carlos E Alford M](https://carlosealford.com)
- Frontend Mentor - [WebShuriken](https://www.frontendmentor.io/profile/WebShuriken)
- Twitter - [@webshuriken](https://www.twitter.com/webshuriken)

## Acknowledgments

- Thanks to [Ahmed Faisal](https://github.com/afrussel) for
showing me his solution using the `mix-blend-mode` property which helped me to
match the purple dye in the cards image.
