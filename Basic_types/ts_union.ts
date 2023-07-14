function add(a: any, b: any) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }
    throw new Error('Parameters must be numbers or strings');
}

add(true, false); // ERROR AT RUNTIME

// let result: number | string;
// result = 10; // OK
// result = 'Hi'; // also OK
// result = false; // a boolean value, not OK