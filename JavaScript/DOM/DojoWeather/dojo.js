var element1=document.querySelector("#dismiss")
function hide(){
    element1.remove()
}
var r2= document.querySelector("#red");
var r3= document.querySelector("#red1");
var r4= document.querySelector("#red2");
var r5= document.querySelector("#red3");


var b6= document.querySelector("#blue");
var b7= document.querySelector("#blue1");
var b8= document.querySelector("#blue2");
var b9= document.querySelector("#blue3");




var elem=document.querySelector("#temperature")
function Convert(){
    console.log(elem.value)
    if (elem.value== "Celcius") {
        r2.innerText="24";
        r3.innerText="27";
        r4.innerText="21";
        r5.innerText="26";
    
        b6.innerText="18";
        b7.innerText="19";
        b8.innerText="16";
        b9.innerText="21";
    }
    else {
        r2.innerText="75";
        r3.innerText="80";
        r4.innerText="69";
        r5.innerText="78";
    
        b6.innerText="65";
        b7.innerText="66";
        b8.innerText="61";
        b9.innerText="70";
    }
}



