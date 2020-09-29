<h1 align="center">
    <img alt="Launchbase" src="https://storage.googleapis.com/golden-wind/bootcamp-launchbase/logo.png" width="400px" />
</h1>

<h3 align="center">
 Challenges - Starting at the Front End
</h3>

<p align="center">
  <a href="https://opensource.org/licenses/MIT" >
    <img src="https://img.shields.io/badge/license-MIT-brightgreen" alt="License MIT">
  </a>
</p>

<p align="center"> 
  <a href="#pushpin-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#2-1">2-1</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#2-2">2-2</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#2-3">2-3</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#Foodfy">2-4</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#key-License">License</a>
</p>

![Peek_chall2 3_Launchbase](https://user-images.githubusercontent.com/59603723/94573880-e5b9ec00-0248-11eb-9154-50aea997ecdc.gif)

## :pushpin: About:

In the challenges of this module I needed to build a website about Rocketseat where I presented some information about the company in addition the bootcamps it develops. 
And a modal pop-up was used that redirects to the official bootcamp page.


<h2 id="2-1" align="center">Challenge 2-1: First HTML</h2>

## :rocket: About of challenge
 
Create an html file that contains a [favicon](https://raw.githubusercontent.com/amorim-dev/Launchbase-Bootcamp/master/Starting-Frontend/Challenges/assets/favicon.ico) and a header with 3 links: Community, Email and Telephone.

### Favicon

The favicon is the icon that appears on the browser tab. The file is available under the name favicon.ico. To use it, it is necessary to import it with the link tag in the html.

```html
<link rel="icon" href="favicon.ico" type="assets/favicon.ico" />
```

### Links

- `Rocketseat Community`: Link that should direct to the invitation from the open rocketseat community `(https://discordapp.com/invite/gCRAFhc)`

- `Email`: Link that should call the command to send email to the addressee  `oi@rocketseat.com.br`. Tip: use the command `mailto` inside `href`;

- `Phone`: Link that should call the command to make a call to the number `+5547992078767`. Tip: use the command `tel` inside `href`;

### Stylization

You are free to choose the style you prefer for this challenge, but some points are mandatory:

- A background must be applied
- The Roboto font must be used
- The header needs to occupy the entire lateral and upper space (body without margin)
- The header must have an internal spacing of 30px in all directions
- Links must be 30px of spacing


<h2 id="2-2" align="center">Challenge 2-2: Description page</h2>

## :rocket: About of challenge

From challenge 2-1, add a new link in the header called *About*. This page should show information referring to Rocketseat.

### Page information

- An image of the company logo
- The name of the company
- A brief description of the company
- A list of the main technologies used. Tip: use the `ul` tag for the list and `li` for the list item.
- You have to add social networks (Github, Instagram and Facebook). 

### Stylization

You are free to choose the style you prefer for this challenge, but some points are mandatory:

- The image must have a border and a circular shape.
- The Roboto font must be used
- The company name and image must be highlighted from the rest
- Social network links must have some visual change when the mouse cursor passes over them.

<h2 id="2-3" align="center">Challenge 2-3: Courses and iframe page</h2>

## :rocket: About the challenge 

From the challenge 2.2 file, add a link called Contents in the header. This page should contain a grid where the 3 main courses of Rocketseat should be shown: Starter, Launchbase and GoStack. When clicking on one of the courses, a modal must be opened where an iframe will load the information of the selected course.

### Page Information

- Page title
-Grid title with 3 columns and 1 row where the course cards will be presented

## Card information

- Course logo ([Starter](https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg), [Launchbase](https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg) e [GoStack](https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg))
- Course title
- Number of course modules
- Information if the course is free or paid

## Modal

The modal must contain an iframe that fetches the course page (tip: just add `starter`, `launchbase` or `gostack` in the end of `https://rocketseat.com.br/`). In addition to the button to close the modal, it is necessary to implement the functionality of maximizing the modal (tip: use the same logic implemented to close the `modalOverlay`, but work with the` modal` class and use the `contains` method of the` classList` to check whether or not the element is with the `maximize` class).

### Stylization

You are free to choose the style you prefer for this challenge, but some points are mandatory:

- The grid should be used to organize the courses
- The modal should never open maximized

<h2 id="Foodfy" align="center">Challenge: Building Foodfy :construction_worker: :construction:</h2> 


## :key: License:

This project is under MIT license, for more details check [LICENSE](https://github.com/amorim-dev/Launchbase-Bootcamp/blob/master/LICENSE).

---

Made with :purple_heart: by **Bianca Amorim**. :point_right: [My social networks](https://www.linkedin.com/in/amorimbiadev/)
