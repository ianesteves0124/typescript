let variableName: string;
variableName = 'TypeScript Testing';

const constantName: string = 'Hello';

console.log(variableName.toUpperCase());

let username: string = 'John';
let age: number = 25;
let active: boolean = true;

console.log(username + ' ' + age);

let arrayName: string[] = ['Ian', 'Miles'];

console.log(arrayName[1]);

let person: {
    name: string;
    age: number
};

person = {
    name: 'Ian',
    age: 21
}

console.log(`My name is ${person.name} and I am ${age} years old.`);

let greeting : (name: string) => string;

greeting = function (name: string){
    return `Hi ${greeting.name}`;
};

// greeting = function(){
//     console.log('Hello'); 
// }