/*
var name = "User";
var age = 22;
var phrase = "USA is a nice country"
alert("js test " + name + " your age is " + age);

console.log(name);
console.log(phrase.replace("USA", "Brazil"));
console.log(phrase.toUpperCase());
console.log(phrase.toLowerCase());

var lists = ["Apple", "Orange", "Banana"];
console.log(lists[0]);
lists.push("Grape");
lists.push("Grape");
lists.pop();
console.log(lists.length);
console.log(lists.reverse());
console.log(lists.toString());

console.log(lists.join(" - "));
*/

/*
var fruit = { name: "Apple", color: "Red" };

var fruitDirList = [{ name: "Apple", color: "Red" }, { name: "Cherry", color: "Red" }, { name: "Banana", color: "Red" }];

console.log(fruit.name);

console.log(fruitDirList);
console.log(fruitDirList[1]);

var age = prompt("What is your age");



if (age >= 18) {
    alert("Can enter");
} else {
    alert("Can't enter");
}

var count = 5;
while (count <= 5) {
    console.log(count);
    count++;
}

for (count = 0; count <= 5; count++) {
    console.log(count);
}

var d = new Date();
console.log(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getMonth());
console.log(d.getFullYear());
*/

/*

function sum(n1, n2) {
    return n1 + n2;
}

console.log(sum(5, 5));

function setReplace(phrase, name, new_name) {
    return phrase.replace(name, new_name);
}

console.log(setReplace("Let's go everybody!", "Let's", "Let's not"));


function validateAge(fage) {
    var validate;
    if (fage >= 18) {
        validate = true;
    } else {
        validate = false;
    }
}

var age = prompt("How old are you?");
alert(validateAge ? "Can Enter" : "Can't Enter");
*/


function clicked() {
    //alert("Very nice!");
    document.getElementById("thanks").innerHTML = "<b>thanks for clicking<b>";
}

function redirect() {
    window.open("https://google.com/");
    //window.location.href = "https://bing.com/"
}

function change(element) {
    //document.getElementById("mouseMove").innerHTML = "hello there again!";
    element.innerHTML = "hello there again!";
}

function returnToOrig(element) {
    //document.getElementById("mouseMove").innerHTML = "Put your mouse over the text";
    element.innerHTML = "Put your mouse over the text";
}

function load() {
    alert("loaded page");
}

function funcChanve(element) {
    console.log(element.value);
}