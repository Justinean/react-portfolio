(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(4),s=a.n(r),i=(a(9),a(2)),o=(a(10),a(0));var l=function(){return Object(o.jsxs)("div",{className:"aboutme",children:[Object(o.jsx)("h2",{children:"About Me"}),Object(o.jsx)("img",{src:"./images/justin.PNG",alt:"Me",width:"150px",height:"225px"}),Object(o.jsx)("p",{children:" I am an 19 year old student who is learning to become a full stack web developer where I can create and maintain websites both on the front end, and back end. I am currently unemployed so I could focus more on my schooling. I stream and play games offline for fun. I have graduated from high school with honors at a 3.5 gpa. My skillset includes python, javascript, css, html, react, express and a couple other libraries. "})]})};a(12);var h=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],h=s[1],j=Object(n.useState)(""),u=Object(i.a)(j,2),d=u[0],b=u[1],m=Object(n.useState)(""),g=Object(i.a)(m,2),p=g[0],x=g[1],O=function(e){var t=e.target,a=t.name,n=t.value;"email"===a?h(n):"name"===a?c(n):b(n)};return Object(o.jsx)("div",{className:"contact",children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("input",{value:a,name:"name",onChange:O,type:"name",placeholder:"name"}),Object(o.jsx)("input",{value:l,name:"email",onChange:O,type:"email",placeholder:"email"}),Object(o.jsx)("textarea",{value:d,name:"message",onChange:O,type:"message",placeholder:"message"}),Object(o.jsx)("p",{children:p}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),a?!function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(l)?x("Invalid email!"):d?(alert("Thank you for sending the message. I will get back to you as soon as possible"),c(""),h(""),b("")):x("Please fill out a message for me."):x("Please put in your name")},children:"Submit"})]})})};a(13);var j=function(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"images",children:[Object(o.jsx)("a",{href:"https://github.com/Justinean",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"./images/github.png",alt:"Github cat",width:"50px",height:"50px",target:"_blank"})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/justin-hoch-0b84651b6/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"./images/linkedin.png",alt:"LinkedIn icon",width:"50px",height:"50px"})}),Object(o.jsx)("a",{href:"https://www.instagram.com/SlateusTV/",target:"_blank",rel:"noreferrer",children:Object(o.jsx)("img",{src:"./images/instagram.png",alt:"Instagram icon",width:"50px",height:"50px"})})]})})};a(14);var u=function(e){var t=e.currentPage,a=e.handlePageChange,n=e.locationName,c=e.displayName;return Object(o.jsx)("a",{href:"/react-portfolio/#".concat(n),className:t===n?"active navlink hidden":"navlink hidden",onClick:function(){return a(n)},children:c})};a(15);var d=function(e){var t=e.currentPage,a=e.handlePageChange,n=!1;return window.onresize=function(){document.querySelectorAll(".navlink").forEach((function(e){e.classList.add("hidden"),n=!1}))},Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsx)("h1",{children:"Justin Hoch's Portfolio"}),Object(o.jsxs)("button",{className:"linkButton",onClick:function(){var e=document.querySelectorAll(".navlink");n?(e.forEach((function(e){e.classList.add("hidden")})),n=!1):(e.forEach((function(e){e.classList.remove("hidden")})),n=!0)},children:[Object(o.jsx)("p",{children:"_"}),Object(o.jsx)("p",{children:"_"}),Object(o.jsx)("p",{children:"_"})]}),Object(o.jsxs)("div",{className:"navbarLinks",children:[Object(o.jsx)(u,{currentPage:t,handlePageChange:a,displayName:"About Me",locationName:"aboutme"}),Object(o.jsx)(u,{currentPage:t,handlePageChange:a,displayName:"Portfolio",locationName:"portfolio"}),Object(o.jsx)(u,{currentPage:t,handlePageChange:a,displayName:"Contact",locationName:"contact"}),Object(o.jsx)(u,{currentPage:t,handlePageChange:a,displayName:"Resume",locationName:"resume"})]})]})};a(16);var b=function(e){var t=e.imageName,a=e.altTag,n=e.languages,c=e.name,r=e.link,s=e.repo;return Object(o.jsx)("div",{className:"projectDiv",children:Object(o.jsxs)("div",{className:"project",children:[Object(o.jsx)("img",{src:"./images/".concat(t,".png"),alt:a,width:"500px",height:"250px"}),Object(o.jsx)("div",{className:"layer",onClick:function(){return window.open(r,"_blank")},children:Object(o.jsxs)("div",{className:"text",onClick:function(){return window.open(r,"_blank")},children:[Object(o.jsx)("h2",{children:c}),Object(o.jsx)("img",{src:"./images/github.png",alt:"GitHub Cat",width:"50px",height:"50px",onClick:function(){return window.open("https://github.com/Justinean/".concat(s),"_blank")}}),Object(o.jsx)("p",{children:n})]})})]})})};a(17);var m=function(){return Object(o.jsxs)("div",{className:"portfolio",children:[Object(o.jsx)(b,{imageName:"managemenow",altTag:"Manage Me Now",languages:"HTML/CSS/JS/Express",name:"Manage Me Now",link:"https://manage-me-now.herokuapp.com/",repo:"Manage-Me-Now"}),Object(o.jsx)(b,{imageName:"project1",altTag:"BlitzAndChaos",languages:"HTML/CSS/JS",name:"Blitz and Chaos",link:"https://justinean.github.io/BlitzandChaos/",repo:"BlitzandChaos"}),Object(o.jsx)(b,{imageName:"weather",altTag:"Weather Dashboard",languages:"HTML/CSS/JS",name:"Weather Dashboard",link:"https://Justinean.github.io/weather-dashboard/",repo:"weather-dashboard"}),Object(o.jsx)(b,{imageName:"password",altTag:"Password Generator",languages:"HTML/CSS/JS",name:"Password Generator",link:"https://justinean.github.io/password-generator/",repo:"password-generator"})]})};a(18);var g=function(){return Object(o.jsxs)("div",{className:"resume",children:[Object(o.jsx)("h2",{children:"Resume"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{children:["You can download my resume ",Object(o.jsx)("a",{target:"_blank",href:"./resume.pdf",children:"here"})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Front-end Proficiencies"}),Object(o.jsx)("ul",{children:["HTML","CSS","JavaScript","JQuery","Responsive Design","React"].map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))}),Object(o.jsx)("br",{}),Object(o.jsx)("h3",{children:"Back-end Proficiencies"}),Object(o.jsx)("ul",{children:["APIs","Node","Express","MySQL","Sequelize","MongoDB","Mongoose","REST"].map((function(e,t){return Object(o.jsx)("li",{children:e},t)}))})]})};var p=function(){var e=Object(n.useState)("aboutme"),t=Object(i.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)("div",{style:{height:"100%"},children:[Object(o.jsx)(d,{currentPage:a,handlePageChange:function(e){document.querySelectorAll(".navlink").forEach((function(e){e.classList.add("hidden")})),c(e)}}),function(){switch(a){case"aboutme":return Object(o.jsx)(l,{});case"portfolio":return Object(o.jsx)(m,{});case"contact":return Object(o.jsx)(h,{});case"resume":return Object(o.jsx)(g,{});default:return Object(o.jsx)("h1",{children:"Error 404: Page not found!"})}}(),Object(o.jsx)(j,{})]})};var x=function(){return Object(o.jsx)(p,{})};window.location.href.endsWith("/")||(window.location.href="/"),s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.adfdc10e.chunk.js.map