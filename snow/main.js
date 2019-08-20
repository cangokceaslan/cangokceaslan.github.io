var div,l1,t1;
function randomColors(){
    var color = "#";
    var str = "0123456789ABCDEF";
    for(var i = 0; i<6; i++){
       color += str.charAt(parseInt(Math.random()*str.length));
    }
    return color;
}
randomColors();
for(var i = 0; i < 100; i++){
    l1 = parseInt(Math.random()*(window.innerWidth-20));
    t1 = parseInt(Math.random()*(window.innerHeight-20));
    //console.log(l1);
    div = document.createElement("div");
    div.classList.add("snow");
    div.style.left = l1.toString()+"px";
    div.style.top = t1.toString()+"px";
    div.style.backgroundColor = randomColors();
    document.body.appendChild(div);
}
function progress(elements){
    for(var i = 0; i < elements.length; i++){
        elements[i].style.top = (parseInt(elements[i].style.top.split("px")[0])+Math.ceil(Math.random()*2)).toString()+"px";
    }
}
var timer = setInterval(function(){
    progress(document.getElementsByClassName("snow"));
    for(var i = 0; i < document.getElementsByClassName("snow").length; i++){
         if(parseInt(document.getElementsByClassName("snow")[i].style.top.split("px")[0]) > (window.innerHeight-20)){
            document.getElementsByClassName("snow")[i].parentNode.removeChild(document.getElementsByClassName("snow")[i]);
            l1 = parseInt(Math.random()*(window.innerWidth-20));
            t1 = parseInt(Math.random()*(100-20));
            div = document.createElement("div");
            div.classList.add("snow");
            div.style.left = l1.toString()+"px";
            div.style.top = t1.toString()+"px";
            div.style.backgroundColor = randomColors();
            document.body.appendChild(div);
         }
    }
},10);
//clearInterval(timer);