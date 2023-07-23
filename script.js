/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

const grades = [56,87,99,40]; {
console.log (grades);
}
let addremove = grades.splice (4,1,68);{
    console.log (grades)
}

function replace(){
    let grade = grades.replace(40,60);
    console.log (grade);
}

let sumgrades = 87 + 99 + 60 + 68;{
    console.log (sumgrades);
}
let x = sumgrades / 4;{
    console.log (x);
}





/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/
 
const vehicle = {
    name: "NX",
    brand: "LX",
    yearofmake: 2020,
    numberofwheels: 4,
    isenvironmentFriendly: "yes",
}

let car ="";
   for (let x in vehicle){
    car += vehicle[x] + "<br>";
    console.log (car)
}

/* Class Activity
Write a function that takes in 2 params check if they are equal if they are console log a nice message if they are not console log a nicer message about them being equal
invke the function with different primitive data types*/

function compare (x,y){
if (x == y); {
    console.log ("Time to wake up");
  } else(x != y); {
    console.log("silence");
  }
}