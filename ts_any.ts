//Sometimes, you may need to store a value in a variable. But you don’t know its type at the time of writing the program. And the unknown value may come from a third party API or user input.
// In this case, you want to opt-out of the type checking and allow the value to pass through the compile-time check.
// To do so, you use the any type. The any type allows you to assign a value of any type to a variable:

//json may come from a third party API
const json = `{"latitude":10.11, "longitude":12.12}`;

//paser JSON to find location
const currentLocation = JSON.parse(json);
console.log(currentLocation);


// let result: any;
// result = 10.123;
// console.log(result.toFixed());
// result.willExist(); //

// ERROR 'toFixed' does not exist on type object
// let result: object;
// result = 10.123;
// result.toFixed();