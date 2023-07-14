var message = 'Hello, TypeScript!';
// create a new heading 1 element
var heading = document.createElement('h1');
heading.textContent = message;
// add the heading document
document.body.appendChild(heading);

document.addEventListener('click', function (event) {
    console.log(event.button); // 
});

document.addEventListener('scroll', function (event) {
    console.log(event.button); // compiler error
});

//      Type inference	                   Type annotations
//TypeScript guesses the type	You explicitly tell TypeScript the type