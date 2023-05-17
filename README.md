This website is a completed task which meets all requirements given in advance.

Tech stack:
HTML5, CSS3 (used BEM naming system), JavaScript, React.js (JSX templating engine), Firebase

Aproach: 
While developing there was an assumption that website should be scalable so most of the components were made reusable for faster development of other routes of the website.
CSS is all in one compact file but can be easily split into separate files for each component thanks to comments in the css file.

Project structure:
App.js renders a single Home.jsx page. Home page then contains all the sections as reusable components. These components further break down into small UI components which can be also used throughout future pages. 

Website features:
1. UI according to the design.
2. Dropdown menu on hover on "Služby" anchog tag in navbar.
3. Scalable and reusable character due to component structure of the website.
4. Fully responsive design at breakpoints:
(max-width: 1205px - for better fit of all elements with pictures)
(max-width: 768px - responsive design for tablets)
(max-width: 480px - responsive design for phones with ham menu instead clasic nav links)

Source code is in this repository.

Live version of a website was deployed using Firebase and can be accessed at:
https://brilo-website.web.app
