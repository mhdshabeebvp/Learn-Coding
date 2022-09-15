//dom-create and remove.
var heading = document.createElement("h1");
function create() {
  heading.innerHTML = "hello world";
  document.body.appendChild(heading);
}
function remove() {
  heading.remove();
}
