// using tag name access using querySelectorAll [that means we can chage the things using the tag name such as <h1>,<p>,etc........]

var a = document.querySelectorAll("h1");
con
a[0].innerHTML="learn html";
a[1].style.color="blue";
a[2].style.color="green";

//using the class
var b = document.querySelectorAll(".hclass");
console.log(b)
a[0].innerHTML="learn html";
a[1].style.color="cyan";

//using id 
//[ * id(single element) ann use cheyyunnathengil we can use quarySelector not quarySelectorAll]

var c = document.querySelector("#heading1");
console.log(c)
a[0].innerHTML="learn html";
a[1].style.color="grey";