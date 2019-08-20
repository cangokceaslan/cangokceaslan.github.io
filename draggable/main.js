dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
//var a,b;
var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
var element = document.getElementById("mydivheader");
function myFunction(event) {
  //event.preventDefault();
  var x = event.touches[0].clientX;
  var y = event.touches[0].clientY;
  //console.log(x);
  //console.log(y);
  pos1 = pos3 - x;
  pos2 = pos4 - y;
  document.getElementById("mydiv").style.top = (element.offsetTop - pos2) + "px";
  document.getElementById("mydiv").style.left = (element.offsetLeft - pos1) + "px";
}
function getter(event){
  //event.preventDefault();
  pos3 = event.touches[0].clientX - parseInt(document.getElementById("mydiv").style.left.split("px")[0]);
  pos4 = event.touches[0].clientY - parseInt(document.getElementById("mydiv").style.top.split("px")[0]);
  //console.log(pos3);
  //console.log(pos4);
  document.ontouchmove = myFunction;
  document.ontouchend = ender;
}
function ender(event){
  //event.preventDefault();
  document.ontouchmove = null;
  document.ontouchend = null;
}
document.getElementById("mydivheader").addEventListener("touchstart",getter,{passive:false});