var str1 = "mom";

console.log(IsAPalindrome(str1));

function IsAPalindrome(str1){
            var palindrome = str1.split("").reverse().join("");
            if(palindrome === str1){
                        return true;
            }
            else{
                        return false;
            }
}