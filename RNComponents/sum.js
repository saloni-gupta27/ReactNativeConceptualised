
const sum = calculateSum(3,5,6)

function calculateSum(...number){
    return number.reduce((accumulator, curr)=> accumulator+curr,0)
}
 console.log(sum)


function outer(){
    let count = 0;
    console.log('outer')
     return function inner(){
     
        console.log(++count);
        console.log('inner')
     }
}
const counter = outer()
counter()

const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1 resolved"), 1000));
// const promise1 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Promise 1 failed")), 500));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Promise 2 failed")), 500));
const promise3 = new Promise((resolve, reject) => setTimeout(() => reject(new Error("Promise 3 failed")), 500));
// const promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3 resolved"), 2000));

Promise.allSettled([promise1, promise2, promise3])
  .then(results => {
    console.log(results);
  });

// 1. Global scope
const globalVar = "I am a global variable.";

function outerFunction() {
  // 2. outerFunction's local scope
  const outerVar = "I am from the outer function.";

  function innerFunction() {
    // 3. innerFunction's local scope
    const innerVar = "I am from the inner function.";

    console.log(innerVar);  // Finds innerVar in its own scope
    console.log(outerVar);  // Finds outerVar in its parent's scope
    console.log(globalVar); // Finds globalVar by going up the scope chain
  }

  innerFunction();
}

outerFunction();

// This will cause a ReferenceError because innerVar is not in the global scope
// console.log(innerVar);

var a = {},
  b = { key: 'b' },
  c = { key: 'c' };
  d={key:'d'}

a[b] = 123;
a[c] = 456;
a[d]=789

console.log(a[b]);

var nums = [1, 2, 3];
var funcs = [];
for (let i = 0; i < nums.length; i++) {
  funcs.push(
    (function(j) {
      return function() {
        console.log(j);
      };
    })(i)
  );
}
funcs.forEach(f => f());
   
 