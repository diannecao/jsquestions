
console.log("hello world");

console.log("Question 1: Determine if a randomly generated number is divisible by 7 and 9. Print success and failure messages to the console.");
var randomNum = Math.floor(Math.random()*1000);
console.log(randomNum);
if(randomNum%7==0 && randomNum%9==0){
    console.log("Success");
}else{
    console.log("Failure");
}
console.log("");

console.log("Question 2: Use the question mark and conditional chaining to determine a student's letter grade based on a number. Print letter grade to the console");
var grade = Math.floor(Math.random()*100);
console.log(grade);
let text = (grade < 60) ? "F":(grade < 70)? "D":(grade < 80)? "C": (grade < 90) ? "B": (grade <= 100)? "A":"A";
console.log(text);
console.log("");

console.log("Question 3: Make a function that does an arithmetic calculation like addition or calculates gravity. The function must have parameters and returns. Console.log the result of your calculation.");
var weight = 1; 
console.log("A current weight:"+weight+"kg");
console.log("The weight on the moon: "+MoonWeight(weight)+"kg");
function MoonWeight(x){
    return x*16.5/100;
}
console.log("");

console.log("Question 4: Make an arrow function that calls your previous function with random parameters");
var val = Math.floor(Math.random()*100);
newf = (val) => "Weight on the moon: "+ val;
console.log(newf(val));
console.log("");

console.log("Question 5: Make an array full of strings of size 15. Console.log the size of the array, the first element, the last element, a random element, sort the array, push things into the array, add an integer into the array. Hint use built in functions");
const primes = [19, 43, 11, 7, 5, 37, 2, 29, 17, 47, 31, 13, 3, 23, 41];

const sortprime = primes.sort(function(a, b){return a - b});
console.log(primes.length+ primes[0],primes[primes.length-1]);
var sortedarray = "";
sortprime.forEach(function(entry) {
   sortedarray = sortedarray + entry + " ";
    });
  console.log(sortedarray);
  sortprime.push(53);
  console.log("");

console.log("Question 6: Make an array full of 10 random numbers between the values of 29 and 87 inclusive on both ends. Use loops to find the greatest distance between consecutive elements. Console.log the distance and the elements");
    for(var list=[], i=0;i<10;i++) 
    list[i]=Math.floor(Math.random() * (87 - 29 + 1) + 29);
    var randomlist = "";
    list.forEach(function(entry) {
        randomlist = randomlist + entry + " ";
         });
       console.log(randomlist);
       var max = 0;
    for(let i=0;i<9;i++){
        if(Math.abs(list[i]-list[i+1])>max){
            max = Math.abs(list[i]-list[i+1]);
        }
    }
    console.log(max);
    console.log("");

console.log("Question 7: Take the array you made in the last question. Use the map() function for arrays to calculate the square of that number. console.log the new array");
    const newArr = list.map(Square);
    function Square(num) {
        return num * num;
      }
    var newarray = "";
    newArr.forEach(function(entry) {
        newarray = newarray + entry + " ";
         });
         console.log(newarray);
         console.log("");

console.log("Question 8: Take the array you made in the last question. Find the largest number in the array. Use the filter() function for arrays to filter all numbers in the array that are larger than half of the maximum number. Console.log the new array"); 
    console.log(Math.max(...newArr));
    var half = Math.max(...newArr)/2; 
    const filtered = newArr.filter(CheckValue);
    function CheckValue(num){
        return num >= half;
    }
    var eight = "";
    filtered.forEach(function(entry) {
        eight = eight + entry + " ";
         });
         console.log(eight);
         console.log("");
    
console.log("Question 9: Take the array you made in the last question. Use the reduce() function for arrays to sum the values. Console.log the result");
    const reduced= filtered.reduce(Reducesum);

function Reducesum(total, num) {
  return total + num;
}
    console.log(reduced);
    console.log("");

    console.log("Question 10: Take any of the arrays you made so far. Use the forEach() function for arrays to print out a visual representation of the array.");
    primes.forEach(Printing);
    var ten = "";
    function Printing(entry) {
        console.log(entry);
      }
      
      console.log("");
    
      console.log("Question 11: Define a class of your choosing. The class must have a constructor with parameters, at least 3 variables one has to be a number and one has to be a string. The class should also have a custom print function that prints the variables.");
      class Webdev {
        constructor(name, year,age) {
          this.name = name;
          this.year = year;
          this.age = age;
        }
        print() {
            console.log(`Name: ${this.name}, Grad Year: ${this.year}, Age: ${this.age}`);
          }
          toString() {
            return `[${this.name}, ${this.year}, ${this.age}]`;
        }
        }
        let Dianne = new Webdev("Dingning Cao", 2024, 18);
        Dianne.print();
        console.log("");
    
        console.log("Question 12: Make an array of 10 objects using the class you created in the last question. Use the filter() to filter the array based on the variable that is a string.  Use the map() to make a new array based on the variable that is a number. Use the forEach() to change the values in the object. Create a custom sort method to sort the objects in ascending or descending order. Console.log the results.");
        let webdevArray = [
            new Webdev("Dingning C", 2024, 18),
            new Webdev("Aidan G", 2023, 16),
            new Webdev("Erika D", 2024, 17),
            new Webdev("Keira Z", 2024, 18),
            new Webdev("Hailey C", 2024, 17),
            new Webdev("Z S", 2024, 16),
            new Webdev("Elena F", 2024, 17),
            new Webdev("Bryan S", 2024, 17),
            new Webdev("Soraya D", 2024, 17),
            new Webdev("Will G", 2024, 18),
        ];

        function Plsfilter(a){
            return typeof a.name === 'string';
        }
        let filterednames = webdevArray.filter(Plsfilter);
        console.log("Array with only names:");
        var twelvefilter = "";
        filterednames.forEach(function(entry) {
            twelvefilter = twelvefilter + entry.name + " ";
             });
             console.log(twelvefilter);
     
        

        let Mapnumbers = webdevArray.map(a => a.year);
        console.log("Array with only integers:");
        var twelvemap = "";
        Mapnumbers.forEach(function(entry) {
            twelvemap = twelvemap + entry + " ";
             });
             console.log(twelvemap);


        webdevArray.forEach(twelve);
        function twelve(a) {
            a.age = a.age + 1; 
          }
          var agelist = "";
        function Filterrr(a){
        agelist = agelist + a.age + " ";
        return a.name;
        }
        let filterednewAge = webdevArray.filter(Filterrr);

          console.log("Changed Age:");
        console.log(agelist);

        webdevArray.sort((a, b) => b.age - a.age);

       
        var sortedlist = "";
        function Final(a){
        return a.name;
        }
        let filteredString = webdevArray.filter(Final);
        filteredString.forEach(function(entry) {
            
            sortedlist = sortedlist + entry + " ";
             });
        console.log("Sorted by age (descending):");
        //console.log("Array with only strings:");
        console.log(sortedlist);
     




      
