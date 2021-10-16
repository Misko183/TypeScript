function warOfNumbers(array: number[]) {
    let a:number=0;
    let b:number=0;
  
      for (let i:number = 0; i < array.length; i++){
              if(array[i] % 2 == 0){
              a += array[i];
              }
              else{
               b += array[i];
              }
          }
          return a < b? b - a : a - b;
  }
  console.log(warOfNumbers([1,2,3,4,5]));