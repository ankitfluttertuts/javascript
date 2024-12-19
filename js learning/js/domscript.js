let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let texts = document.getElementById("list");

button1.addEventListener('mouseover', function() {
    button1.style.color = "white";
});

button2.addEventListener('click', function() {
  var element = document.createElement("li");

  element.textContent = "Data"+(texts.children.length+1);
  texts.appendChild(element);
   
});