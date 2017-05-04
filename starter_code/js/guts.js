// All the code you will need to create for this project will be completed below
// Your functions must be called the following:
    // multiply, divide, subtract, add, power, square_root, logBase10, generateRandomNumber


// 1. divide
//    write a function named "divide" that takes in two parameters and returns their quotient
function divide(x,y) {
    return x / y;
	//Write your code below this line
}

// 2. multiply
// write a function named
// "multiply" that takes in two
// parameters and returns
// their product
function multiply(x,y) {
    return x * y;
}

// 3. subtract 
//    write a function named
//    "subtract" that takes in two
// parameters and returns
// their difference
function subtract(x,y) {
    return x - y;
}

// 4. add
//    write a function named "add" that takes in two parameters and returns their sum
function add(x,y) {
    return x + y;
}

// 5. power
//    write a function named "power" that takes in two parameters and returns their result
function power(x,y) {
    return Math.pow(x,y);
}


// 6. square_root
//    write a function named "square_root" that takes in one parameter and returns their result
function square_root(x) {
    return Math.sqrt(x);
}


// 7. logBase10
//    write a function named "logBase10" that takes in one parameter and returns their result
function logbase10(x) {
    return Math.log(x);
}

// 8. generateRandomNumber
//    write a function named "generateRandomNumber" that takes in no parameters and returns a random number
function generateRandomNumber(){
    return Math.random();
}


// BONUS: write assertions to test whether your functions work!
// Here are some examples for divide(x,y), can you write more for the other functions?
console.assert(divide(100,5) ===  20, "100/5 should equal 20");
console.assert(multiply(5,2) === 10, "5 * 2 should equal 10");
console.assert(add(5,2) === 7, "5 + 2 should equal 7");
console.assert(subtract(5,2) === 3, "5 - 2 should equal 3");
console.assert(power(5,2) === 25, "5 ^ 2 should equal 25");
console.assert(square_root(4) ===  2, "4 root  should equal 2");
console.assert(logbase10(1024) === 6.931471805599453, "1024 root 10 should equal 6.931471805599453");
 

// 
// console.assert(divide(1,1) === 1, "1/1 should equal 1");
// console.assert(divide(1,2) === 0.5, "1/2 should equal 0.5");
