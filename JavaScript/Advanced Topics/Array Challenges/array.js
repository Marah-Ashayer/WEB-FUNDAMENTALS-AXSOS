/*Always Hungry*/

function alwaysHungry(arr) {
    for(i=0; i<arr.length;i++){
        if(arr[i]==="food"){
            console.log("yummy");
        }
        else{
            console.log("I'm Hungry");
        }
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"


/*High Pass Filter*/

function highPass(arr, cutoff) {
    var filteredArr = [];
    for( i=0; i<arr.length;i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9,6,12], 5);
console.log(result); // we expect back [6, 8, 10, 9]

/*Better than Average*/

function betterThanAverage(arr) {
    var sum = 0;
    var avg;
    var count = 0
    for(i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    avg=sum/arr.length;
    for(i=0;i<arr.length;i++){
        if(arr[i]>avg){
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

/*Array Reverse*/
var Array=[]
function reverse(arr) {
    for(i=1;i<=arr.length;i++){
        Array.push(arr[arr.length-i])
    }
    return Array;
}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]  


/* Fibonacci Array*/

function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for(i=2; i<n ;i++){
        fibArr[i]= fibArr[i-1]+fibArr[i-2]
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


