let string1 = "convention";
let string2 = "tio";



console.log(StringEndsWith(string1, string2));

function StringEndsWith(string1, string2){

    if(string1.endsWith(string2)){
        return true;
    }
    else{
        return false;
    }
}