var secHand = document.getElementById("secHand");
var minHand = document.getElementById("minHand");
var hourHand = document.getElementById("hourHand");

// Fix anticlockwise transition from 60 to 1 
function checkDeg(sec){
  if (sec == 90)
    secHand.classList.add("noTransition");
  else 
    secHand.classList.remove("noTransition");
}

function moveHands(sec, min, hour){
  checkDeg(sec);
  secHand.style.transform = "rotate(" + sec + "deg)";
  minHand.style.transform = "rotate(" + min + "deg)";
  hourHand.style.transform = "rotate(" + hour + "deg)";
}

function updateHands(){
  var date = new Date();
  var sec = (date.getSeconds() / 60) * 360 + 90 ;
  var min = (date.getMinutes() / 60) * 360 + 90 ;
  var hour = (date.getHours() / 12) * 360 + 90 ;
  if (sec > 0)
    secHand.style.transition = null;
  moveHands(sec, min, hour);
}

setInterval(updateHands, 1000);