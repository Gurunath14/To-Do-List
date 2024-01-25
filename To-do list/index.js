var a = document.querySelector(".popbg");
var b = document.querySelector(".popup");
var c = document.querySelector(".circle");
var d = document.getElementById("cancel");

c.addEventListener("click", function () {
  a.style.display = "block";
  b.style.display = "block";
});

d.addEventListener("click", function () {
  a.style.display = "none";
  b.style.display = "none";
});

// getting add button and the input values of the popup
var h = document.querySelector(".book-title");
var e = document.getElementById("add");
var i = document.querySelector(".container");
var j = document.querySelector(".book-author");
var k = document.querySelector(".short-des");

e.addEventListener("click", function () {
  var f = document.createElement("div");
  f.setAttribute("class", "bookcontainer");
  f.innerHTML = `<h2>${h.value}</h2>
    <h4>${j.value}</h4>
    <p>${k.value}</p>
    <button onclick="deletebutton(event)">Delete</button>`;
  i.append(f);

  // Clear input values
  h.value = "";
  j.value = "";
  k.value = "";

  a.style.display = "none";
  b.style.display = "none";
});

function deletebutton(event) {
  event.target.parentElement.remove();
}
