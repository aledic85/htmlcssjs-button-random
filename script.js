var element = document.getElementById("btn-rnd");
var element1 = document.getElementById("num-cont")
var clicks = 0;

element.addEventListener ("click", function() {
  clicks += 1;
  var rnd = Math.floor(Math.random() * 100) + 1;
  element1.innerHTML += " " + rnd;
  if (rnd % 2 == 0) {
    element1.style.background = "red";
    element1.style.color = "black";
  } else if (rnd % 2 != 0) {
    element1.style.background = "black";
    element1.style.color = "red";
  }
  element.innerHTML = "Genera numero" + " " + clicks;
})
