console.log("Hey VH Hackers!");

// you define variables with let, a variable name and then a value
let foo = 2;
console.log(foo);

// you can define the value of a variable after you declare the the variable exists!
let bar;
console.log("Bar is: " + bar); // should be undefined

bar = 3;
console.log("Bar is now: " + bar); // should be 3


// let's try multiplying
console.log(foo + '*' + bar + '=' + (foo * bar));

// now you do division!
console.log(foo + '/' + bar + '=' + (foo / bar));




function squareNumber(number) { // square a number
    return Math.pow(number, 2); // return is what the function ends up being
}

squareNumber(foo);
console.log(squareNumber(bar)); // should be 9


function printSquareNumber(number) { // calls square number and prints the results
    console.log(squareNumber(number)); // no return necessary
}

printSquareNumber(1772);

// call printSquareNumber

function cubeNumber(number) {
    //write this with a return statement (like squareNumber)

    return Math.pow(number,3);
}

function printCubeNumber(number) {
    // write this with a console.log() statement!

    console.log(cubeNumber(number));
}


printCubeNumber(76); // or whatever number you want!

// call printCubeNumber