var numbers = [10, 4, 1, 4, -10, -50, 32, 21];
var min;
var max; 

max = min = numbers[0];

console.log(ReturnMinMax(numbers, min, max));

function ReturnMinMax(numbers, min, max){

    for(let i = 1; i < numbers.length; i++){
        if(max < numbers[i]){
            max = numbers[i];
        }
    }

    for(let i = 0; i < numbers.length; i++){
        if(min > numbers[i]){
            min = numbers[i];
        }
    }

    console.log("The Smallest Number is: "+min);
    console.log("The Biggest Number is: "+max);
    console.log("The Difference Between Min And Max Number is: " + (max - min));
}