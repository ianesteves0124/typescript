// let employee : object;

// employee = {
//     firstName: 'Ian Miles',
//     lastName: 'Esteves',
//     age: 21,
//     jobTitle: 'Programmer'
// };

// console.log(employee)
// employee = "Jane"; ERROR STRING IS NOT ASSIGNABLE TO TYPE OBJECT.

let employee : {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'Ian Miles',
    lastName: 'Esteves',
    age: 21,
    jobTitle: 'Programmer'
};

console.log(employee);

//EMPTY TYPE
let vacant : {} = {};
//vacant.firstName = 'Ian';
console.log(vacant.toString());
