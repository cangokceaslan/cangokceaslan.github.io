var mydiv = document.getElementById("mydiv");
var mydivheader = document.getElementById("mydivheader");

function drag(mydiv){
    var pos1=0, pos2=0, pos3=0, pos4=0;
    mydivheader.onmousedown = dragStart;
    function dragStart(e){
      e = event || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmousemove = dragElement;
      document.onmouseup = stopDrag;
    }
    function dragElement(e){
      e = event || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      mydiv.style.top = (mydiv.offsetTop - pos2) +"px";
      mydiv.style.left = (mydiv.offsetLeft - pos1) +"px";
      //console.log((mydiv.offsetTop - pos1) +"px");
      //console.log((mydiv.offsetLeft - pos2) +"px");
    }
    function stopDrag(){
      document.onmousemove = null;
      document.onmouseup = null;
    }
}
drag(mydiv);