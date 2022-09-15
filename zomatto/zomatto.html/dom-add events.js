var heading = document.getElementById("heading");
var btn = document.getElementById("btn");

btn.addEventListener("click",changeColor);

heading.addEventListener("mouseover",changeBG);
function changeColor(){
    heading.style.color="blue";
}
function changeBG(){
    heading.style.backgroundColor ="cyan";
}