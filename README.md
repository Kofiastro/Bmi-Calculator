# Frontend Mentor - Body Mass Index Calculator solution

This is a solution to the [Body Mass Index Calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/body-mass-index-calculator-brrBkfSz1T). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![](./images/3col.png)

### Links

- Solution URL: [(https://github.com/Kofiastro/Bmi-Calculator)]
- Live Site URL:[(https://lighthearted-bombolone-4d3ac5.netlify.app/)]

## My process
Using Tailwindcss i have been able to work on designs much faster and i want to learn more by working on more projects at frontendmentor to help me be good at it.

### Built with

- TailwindCss with grids and flexbox

### What I learned
THis project brought alot of experience throughout my Journey using tailwindcss.I was able to really figure out how to use relative and absolute elements in obtainig wonder well structured designs.grids and flexbox also played a major role in making sure i had proper semantics.Looking at how the limitations page was really aligned was the use of grids and the span element.


```html
  <!--GridSections-->
      <div class="grid grid-cols-1 md:grid md:grid-cols-2 md:gap-4 lg:max-w-3xl ">
        <!--1-->
        <div class="p-8 shadow-xl shadow-Borders rounded-lg lg:col-span-2 lg:mx-40">
          <div class="flex space-x-4 ">
            <img src="./assets/images/icon-gender.svg" alt="Gender">
            <h1 class="text-GunMetal text-xl">Gender</h1>
          </div>
          <p class="text-DarkBlue">
            The development and body fat composition of girls and boys vary with age. Consequently, a child's age and
            gender are considered when evaluating their BMI.
          </p>
        </div>
```

```css
 .bg-hero{
    width:100%;
    height:800px;
    @apply absolute rounded-b-3xl top-0  bg-gradient-to-r from-white to-heroB ;
    }

@media screen(md){
    .bg-hero{
    width:100%;
    height:600px;
    @apply absolute rounded-b-3xl top-0  bg-gradient-to-r from-white to-heroB ;
    }
}
@media screen(lg){
    .bg-hero{
    width:90%;
    height:700px;
    @apply absolute rounded-b-3xl top-0 ml-6 bg-gradient-to-r from-white to-heroB; 
    }
}
.imagez{
@apply w-20 h-20
}
#Benefits_Section{
@apply  bg-BackImg}

```
## Author

- Frontend Mentor - [@Kofiastro](https://www.frontendmentor.io/profile/kofiastro)

## Acknowledgments

Big thanks to Traversy Media and the frontendmentor team 🎉

