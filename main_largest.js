let unsortedarray = [6,8,3,9,4,10,56,1]; 
let change;

function bubbleSort(arr) {
    change = false;
    let final = arr.length - 1;
    for (let i = 0; i < final; i++) {
        if (arr[i] > arr[i+1]) {
            change = true;

            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
            // After the condition is met, the value will be moved into a temporary.
        }
    }
    final--;
}

do {
    bubbleSort(unsortedarray);
} while (change);

console.log(unsortedarray);

const newarray = unsortedarray;
console.log (newarray);

const min = newarray.shift();
console.log(min);

const max = newarray.slice(-1).pop();
// It will not change the array because the slice will create a new array object.
console.log(max);