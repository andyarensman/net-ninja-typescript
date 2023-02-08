"use strict";
let greet = () => {
    console.log('hello, world');
};
let mssg;
const add = (a, b, c) => {
    console.log(a + b);
};
const divide = (a, b, c = 10) => {
    console.log(a / b);
};
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
