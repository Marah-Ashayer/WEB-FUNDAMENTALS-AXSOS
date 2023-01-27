var num1;
var num2;
var operator;
var currentNum="";
var displayDiv = document.getElementById("display");


function press(num){
    currentNum+=parseFloat(num);
    console.log(num1,num2);
    if(operator){
        num2=parseFloat(currentNum);
    }
    else{
        num1=parseFloat(currentNum);
    }
    displayDiv.innerText =currentNum; 

}

function clr(){
    displayDiv.innerText ="0"
    
}

function setOP(op){
    operator=op;
    currentNum= " ";
    displayDiv.innerText ="0";
}

function calculate(){
    var result;
        if(operator ==="-"){
            result = num1 - num2;
        }
        else if(operator ==="+"){
            result = num1+ num2;
        }

        else if(operator ==="*"){
            result = num1*num2;
        }
        else if(operator ==="/") {
            result = num1/num2;
        }
        console.log(num1,num2);
        displayDiv.innerText=result;

}
