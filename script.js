
console.log("----------------------Part 1: Declaring and Invoking Functions------------------------");

function greet(name) {
    return "Hello " + name;
}

console.log(greet("Neslihan"));

console.log("----------------------Part 2: Working with Parameters and Returning Values------------------------");

function addNumbers(num1, num2) {
    return num1 + num2;
}

console.log(addNumbers(567, 33));

console.log("----------------------Part 3: Function Scope------------------------");

let x = 10; 

function changeValue() {
    let x = 20;  
    console.log("Inside the function: x = ", x);
}

console.log("Before calling the function: x = ", x);

changeValue();

console.log("After calling the function: x = ", x);

console.log("----------------------Part 4: Closures------------------------");

function outerFunction() {
    let count = 0;
    return {
        innerFunction() {
            count ++;
            return count;
        }
    }
}

let counter = outerFunction();
console.log(counter.innerFunction());
console.log(counter.innerFunction());
console.log(counter.innerFunction());
console.log(counter.innerFunction());
console.log(counter.innerFunction());




