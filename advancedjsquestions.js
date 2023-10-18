// console.log("Question 1: Build a code that contains a console.log statement then a promise with a console.log in the resolve. Lastly, have another console.log statement outside of the promise. In a comment, explain the logic of what is happening");

// let myPromise1 = new Promise(function(myResolve1, myReject1) {

//       myResolve1("resolve");

//       myReject1("Error");

//   });

//   myPromise1.then(
//     function(value) {console.log(value);},
//     function(error) {console.log(error);}
//   );
//   console.log("another one");
//   //the promise is a complicated try-catch so you can customise errors thats thrown and successes thats achieved, the "anothor one" console.log prints out first before the promise even though its later in the code becasue we have to wait for the promise to resolve
//   console.log("");

//   console.log("Question 2: Write a promise that resolves after 10 seconds");
//   let myPromise2 = new Promise(function(myResolve2, myReject) {
//     setTimeout(function() { myResolve2("↑the resolve is from the last questions: I love You!"); }, 10000);

//   });

//   myPromise2.then(function(value) {console.log(value);});
//   console.log("");

//   console.log("Question 3: Write a promise that will console.log a number when it resolves and a specific error if it rejects");
//   let myPromise3 = new Promise(function(myResolve, myReject) {
//     let x=Math.random()*10;
//     if(x==5){
//         myResolve(5);
//     }else{
//         myReject("This is wrong and your number is wrong");
//     }

//     });

//     myPromise3.then(
//       function(value) { console.log(value) },
//       function(error) { console.log(error) }
//     );
//     console.log("");

// console.log("Question 4: Write a promise and chain that promise. Use .then() and .catch() methods to console.log() different things as the promises resolve and reject");
// let promise4 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(2), 1500); // (*)
//   }).then(function (result) { // (**)
//     console.log(result); // 2
//     return result + 2;
//   }).then(function (result) { // (***)
//     console.log(result); // 4
//     return result + 2;
//   }).then(function (result) {
//     console.log(result); // 6
//     return result + 2;
//   });
//   console.log("");

//   console.log("Question 5:Write chained promises that do a custom calculation as they resolve. Ex promise resolves once then it adds 2 numbers. Then it resolves again and calculates the first 5 fibonacci numbers");
//   let promise5 = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 0); // (*)
//   }).then(function (result) { // (**)
//     return 21 + 1;
//   }).then(function (result) { // (***)
//     console.log(result);
//     return 1+1+2+3 ;
//   }).then(function (result) {
//     console.log(result);
//   });
//   console.log("");

//   console.log("Question 6: Write an async function that console.logs your favorite movie");
//   async function myFunction() {
//     return "Everything everywhere all at once";
//   }
//   myFunction().then(
//     function(value) {console.log(value);},
//     function(error) {console.log(error);}
//   );
// console.log("Question 7: Write a function that returns a promise that console.logs your favorite movie. Write in the comments if question 6 and 7 do the same thing and why");
function myFunction() {
  return Promise.resolve("Everything everywhere all at once");
}
myFunction().then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
// //async makes sure that a promise is returned and automatically wraps non-promises inside, but they basically are the same thing as returning a promise manually

// console.log("Question 8: Write an asynchronous function that returns “i am asynchronous”. Use .then() to display successful and error messages");
// async function myFunction() {
//         return "i am asynchronous";
//       }
//       myFunction().then(
//         function(value) {console.log(value);},
//         function(error) {console.log(error);}
//       );

// console.log("Question 9: Define a variable that is set to the function from question 7.");
//     const f = function(value) {console.log(value) };

console.log(
  "Question 10: Create an object that holds random integers from 1 to 77 and a string. Create an array of objects your just created of length 9. Create asynchronous function that filters your array for the values of the integer greater than 70. Display the resulting strings of the objects with numbers greater than 70.  Use a try catch block to handle errors."
);
class T{
  constructor(number, word) {
    this.number = Math.floor(Math.random() * 77 + 1);
    this.word = "I'm large";
  }
}


const a = [];
for (let x = 0; x < 9; x++) {
  a[x] = new T();
}
async function myFunction(arr) {
  let b = 0;
  let results = [];
  for (let i = 0; i < 9; i++) {
    console.log(arr[i]);
    value = arr[i].number;
    
    b = i;
    if (value > 70) {
      results.push(arr[b].word);
    } else {
      results.push("Smaller than 70");
    }
  }
  

  return results;
}
myFunction(a).then(
  function (value) {
    console.log(value);
  },
  function (error) {
    console.log(error);
  }
);
