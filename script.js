// Question 1
var petArray = ["cat", "cow","dog"];

//Question 2
console.log (petArray[1]);

//Question 3
petArray.push("sheep"); 

//Question 4
console.log (petArray.length);

//Question 5
var catObject = [
    {
    name: "Susanna",
    color: "Black",
    age: 2
    }
];

//Question 6
for (var i = 0; i < catObject.length; i++) {
    var age = catObject[i].age;
    console.log(age);
}

//Question 7
var catArray = catObject;

//Question 8
for(var i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
}

//Question 9
function logToConsole(equine) {
    console.log(equine);    
}

//Question 10
logToConsole ("donkey");
