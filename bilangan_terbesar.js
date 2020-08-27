let array = [10, 50, 25];
let change;

function solution(n1){
    change = false;
    let final  = n1.length - 1;
    for(let i = 0; i < final; i++){
        if(n1[i] > n1[i+1]){
            change = true;
            let temp    = n1[i];
            n1[i]       = n1[i+1];
            n1[i+1]     = temp;
        }
    }
    final --;
}

do {
    solution(array);
} while(change);

const terbesar = array.slice(-1).pop();
console.log(terbesar);