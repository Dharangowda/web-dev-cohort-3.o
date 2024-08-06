// variables assignment

let FavColor = "red";
const Height = 170 + "cm";
var LikePizza = true;
console.log(FavColor);
console.log(Height);
console.log(LikePizza);

//Function assignment one 
function Sum(a, b) {
    result = a + b;
    return result;
}
console.log(Sum(2, 3));
console.log(Sum("2", "3"));//side quest passing a string insted of a number 

//function assignment two 
function canVote(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(canVote(20));
console.log(canVote(16));

//If /Else Assignment 
function Even(num) {
    if (num % 2 === 0) {
        console.log("The number is even ");
    }
    else {
        console.log("The number is odd ");
    }
}
Even(10);
Even(5);

//Loop assignment 
function sum(input) {
    let result = 0;
    for (let i = 1; i <= input; i++) {
        result += i;
    }
    return result;
}
console.log(sum(5));

//assignment :- create an function that takes an array of objects a sinput and return the users whoes age > 18 and are male 
// useing initialiseing an new array and pushing it to a new array 
function display(arr) {
 let arr2 =[]
 for(let i=0;i<arr.length;i++){
    if(arr[i].age>18 && arr[i].gender === "male"){
        arr2.push(arr[i])
    }
 }
 return arr2;
}
let users = [{
    name: "Dharan",
    age: 19,
    gender: "male"
},
{
    name: "ramya",
    age: 22,
    gender: "female"
},
{
    name: "shran",
    age: 16,
    gender: "male"
}
]
console.log(display(users));

// useing the filter function 

function display2(arrr){
return arrr.filter(function(users2){
    return users2.age > 18 && users2.gender === "male";
});
}

let users2 = [{
    name: "kiran",
    age: 19,
    gender: "male"
},
{
    name: "navya",
    age: 22,
    gender: "female"
},
{
    name: "raman",
    age: 16,
    gender: "male"
}
]
console.log(display2(users2));
