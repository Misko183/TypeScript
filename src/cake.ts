function pieceCake(a:number, b: number, c:number){
  if (b * c <= a) {
          return true;
      }
      return false;
}

console.log(pieceCake(11,5,2));