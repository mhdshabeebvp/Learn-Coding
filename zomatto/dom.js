var a = document.getElementById("head1");
a.innerHTML = "java script";
a.style.color = "blue";

var b = document.getElementsByClassName("head2");
b[1].innerHTML = "good after";
b[1].style.color = "green";

var c = document.getElementsByClassName("head2");
console.log(c);
c[2].innerHTML = "changed value";
c[3].style.color = "cyan";

