const $ = require('jquery');
const {add, subtract, multiply, divide} = require("./add-function");
import { niceStr } from "./say-hello";

let sayHello = () => console.log("Hello");
sayHello();

$("body").css("background-color", "green");
console.log(niceStr());
console.log(add(4, 5));
console.log(multiply(3, 4));