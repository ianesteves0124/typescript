type chars = string;
let msg: chars; // same as string type

// type alphanumeric = string | number;
// let input: alphanumeric;
// input = 100;
// input = 'Hi';
// input = false; // Compiler error because the data types of alphanumeric is string or number only.

//STRING LITERAL TYPES
//The string literal types allow you to define a type that accepts only one specified string literal.
// let click: 'click';
// click = 'click';
// click = 'dblclick'; // compiler error because it is not the same string.

// let mouseEvent: 'click' | 'dblclick' | 'mouseup' | 'mousedown';
// mouseEvent = 'click'; // valid
// mouseEvent = 'dblclick'; // valid
// mouseEvent = 'mouseup'; // valid
// mouseEvent = 'mousedown'; // valid
// mouseEvent = 'mouseover'; // compiler error


let mouseEvent: MouseEvent;
mouseEvent: 'click';
mouseEvent: 'dblclick';
mouseEvent: 'mouseup';
mouseEvent: 'mousedown';

let anotherEvent: MouseEvent;