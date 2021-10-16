function canCapture(m:string,n:string) {
  if (m.charAt(0) == n.charAt(0)|| m.charAt(1) == n.charAt(1)){
           return true;
       }
       return false;
}
console.log(canCapture("B9","D9"));
console.log(canCapture("A8","A7"));
console.log(canCapture("B8","A7"));