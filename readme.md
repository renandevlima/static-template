# Welcome to my static simple page template

This is a simple static template focused in SEO and performance.  

It is indicated to build sales, landing or any page that you have only one page at your project.

## To use this

- Fill the `<meta/>` tags (lines: 8 to 17) on your `./index.php` based on your project.
- Fill `<title>` tag based on your project
- Run `gulp watch`
- Write your HTML code inside `<main>` tag at line 34
- To create colors, fonts, or sizes, you can write like variable on partials components `./assets/src/scss/_colors.scss, ./assets/src/scss/_sizes.scss, ./assets/src/scss/_fonts.scss`
- Write your CSS code using SASS on `./assets/src/scss/index.scss`
- Write your JS code using SASS on `./assets/src/scss/index.js`


### If you do not have yarn installed

Run `npm install -g yarn`

### If you do not have yarn installed

Run `yarn add gulp -G`

### To build your scss and js files

Run `gulp`

### To build your scss and js files while you are developing

Run `gulp watch`

#### Aditional Tip

- Create the folders `./assets/dist/img` and `./assets/dist/fonts` to put your images and fonts
- You can download your fonts in `https://fonts.google.com/`