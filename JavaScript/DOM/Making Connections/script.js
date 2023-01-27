var element=document.querySelector("#h")
function changeName(){
    element.innerText="Ahmed"
}


var counter1=2;
var counter2=500;

var element3=document.querySelector("#badge1")
var element4=document.querySelector("#badge2")
var element5=document.querySelector("#accept1")
var element6=document.querySelector("#accept2")

var element1=document.querySelector("#todd");
var element2=document.querySelector("#phil");

function fun1() {
    element1.remove();
    counter1--;
    element3.innerText=counter1;
    counter2++;
    element4.innerText=counter2;
}

function fun2() {
    element1.remove();
    counter1--;
    element3.innerText=counter1;
}

function fun3(){
    element2.remove();
    counter1--;
    element3.innerText=counter1;
    counter2++;
    element4.innerText=counter2;
}

function fun4() {
    element2.remove();
    counter1--;
    element3.innerText=counter1;
}







