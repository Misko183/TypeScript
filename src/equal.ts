const number1 = 3;
const number2 = 4;
const number3 = 3;

console.log(EqualityOfThreeValues(number1, number2, number3))

function EqualityOfThreeValues(number1, number2, number3){
            if(number1 == number2 && number2 == number3){
                        return 3;
            }
            else if(number1 == number2 || number1 == number3 || number2 == number3){
                        return 2;
            }
            else{
                        return 0;
            }
}