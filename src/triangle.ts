const tr1 = 3;
const tr2 = 4;
const tr3 = 5;

console.log(IsItATriangle(tr1, tr2, tr3));

function IsItATriangle(tr1, tr2, tr3){
            if((tr1*tr1)+(tr2*tr2)==(tr3*tr3)){
                        return true;
            }
            else{
                        return false;
            }
}