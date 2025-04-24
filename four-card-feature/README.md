# Frontend Mentor - Four card feature section solution

This is a solution to the [Four card feature section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![screenshot of the four card feature](./screenshot.png)

### Links

Here are the links to my solution on GitHub and the live page where you can check out the profile card on your browser.

- Solution URL: [Github Repo](https://github.com/carlosealford/frontend-mentor-my-solutions/tree/main/four-card-feature)
- Live URL: [Four Card Feature](https://carlosealford.github.io/frontend-mentor-my-solutions/four-card-feature/)

## My process :computer:

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- SASS
- Git and Github

### What I learned

Using Grid to offset the location of boxes, creating a
brick bond style.

```sass
.fcf__body
  grid-template-columns: repeat(4, 1fr)
  grid-template-rows: repeat(3, 1fr)
  column-gap: 1.4rem

.fcf__card-supervisor
  grid-column: 1 / 3
  grid-row: 2 / 3
  justify-self: end
```

### Continued development

Even though it is stronger than when the challenge begun I could always do with more practice using Grids.

## Acknowledgments

To the whole Dev Community, keep dreaming and innovating. Thank you all. :smile:

## Author

- Website - [Carlos E Alford M](https://carlosealford.com)
- Frontend Mentor - [WebShuriken](https://www.frontendmentor.io/profile/WebShuriken)
- X (Twitter) - [@webshuriken](https://www.x.com/webshuriken)

## License

[MIT License](../LICENSE)
