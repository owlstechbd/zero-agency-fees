

var From1 = document.getElementById("From1");
var From2 = document.getElementById("From2");
var From3 = document.getElementById("From3");

var Next1 = document.getElementById("Next1");
var Next1 = document.getElementById("Next1");
var Back1 = document.getElementById("Back1");
var Back1 = document.getElementById("Back1");
var progress = document.getElementById("progress");

Next1.onclick = function(){
  From1.style.left = "-450px";
  From2.style.left = "40px";
  // progress.style.left = "170px";
}
Back1.onclick = function(){
  From1.style.left = "50px";
  From2.style.left = "460px";
  // progress.style.left = "-20px";
}
Next2.onclick = function(){
  From2.style.left = "-460px";
  From3.style.left = "50px";
   // progress.style.left = "250px";
}
Back2.onclick = function(){
  From2.style.left = "50px";
  From3.style.left = "460px";
  // progress.style.left = "100px";
}

// animation

  new WOW().init();