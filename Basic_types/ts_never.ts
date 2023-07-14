// The never type is a type that contains no values. Because of this, you cannot assign any value to a variable with a never type.

// Typically, you use the never type to represent the return type of a function that always throws an error. For example:

function raiseError(message: string): never {
    throw new Error(message);
}

function reject() { 
    return raiseError('Rejected');
 }

 let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}

//Variables can also acquire the never type when you narrow its type by a type guard that can never be true.

// For example, without the never type, the following function causes an error because not all code paths return a value.

// function fn(a: string | number): boolean {
//     if (typeof a === "string") {
//       return true;
//     } else if (typeof a === "number") {
//       return false;
//     }   
//   }
// WRONG ONE

  function fn(a: string | number): boolean {
    if (typeof a === "string") {
      return true;
    } else if (typeof a === "number") {
      return false;
    }  
    // make the function valid
    return neverOccur();
  }
  
  let neverOccur = () => {
     throw new Error('Never!');
  } 