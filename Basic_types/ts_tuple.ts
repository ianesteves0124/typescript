let skill: [string, number];
skill = ['Programming', 5];

// let skill: [string, number];
// skill = [5, 'Programming'];
// error TS2322: Type 'string' is not assignable to type 'number'.

let color: [number, number, number] = [255, 0, 0];

let bgColor, headerColor: [number, number, number, number?];
bgColor = [0, 255, 255, 0.5];
headerColor = [0, 255, 255];

console.log(bgColor,headerColor);