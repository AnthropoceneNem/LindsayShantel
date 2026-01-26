document.getElementById("num").innerHTML = 123456;
document.getElementById("deci").innerHTML = 123.456;

document.getElementById("str1").innerHTML = "Hello, World!";
document.getElementById("str2").innerHTML = 'JavaScript Syntax Example';

let greeting = "Hi there!";
const pi = 3.14159;
var isActive = true;

document.getElementById("vlet").innerHTML = greeting;
document.getElementById("vconst").innerHTML = pi;
document.getElementById("vvar").innerHTML = isActive;

let a = 10;
let b = 20;   // changed to let so it can update
var cc = 30;

document.getElementById("a").innerHTML = a;
document.getElementById("b").innerHTML = b;
document.getElementById("c").innerHTML = cc;

function changeValues() {
    a = 100;
    b = 200;
    cc = 300;

    document.getElementById("a").innerHTML = a;
    document.getElementById("b").innerHTML = b;
    document.getElementById("c").innerHTML = cc;
}
