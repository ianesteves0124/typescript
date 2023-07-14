// //TypeScript if statement
// An if statement executes a statement based on a condition. If the condition is truthy, the if statement will execute the statements inside its body:

// if (condition) {
//     // if-statement
// }

// IF ELSE STATEMENT
const max = 100;
let counter = 100;
if (counter < max) {
    counter++;
}
else{
    counter = 1;
}

console.log(counter); // 1

//Ternary Operator
const max_num = 200;
let count = 200;
// OTHER  WAY FOR IF ? ELSE : STATEMENT
count < max_num ? count++ : count = 25;
console.log(count);

//IF ELSEIF ELSE STATEMENT
let discount: number;
let itemCount = 1;

if (itemCount > 0 && itemCount <=5) {
    discount = 5; // 5% discount
}
else if (itemCount > 5 && itemCount <=10){
    discount = 10; // 10% discount
}
else{
    discount = 15; //15% discount
}

console.log(`You got ${discount}% discount`);