// q-1
// let x = 1
// let y = 10

// function Recursion(x,y){
//     console.log(x)
//  if(x >= y){
//         return y
//     }
//     x++
//    Recursion(x,y)
    
    
// }
// Recursion(x,y)

// q-2
// let x = 10
// let y = 1

// function Recursion(x,y){
//     console.log(x)
//  if(x <= y){
//         return y
//     }
//     x--
//    Recursion(x,y)
    
    
// }
// Recursion(x,y)

// let s = 0;
// let e = 10


// function Recursion(s,e){
//     if(s >= e){
//         return s
//     }
//     s++
//     Recursion(s,e)
//     console.log(s)
    
// }

// Recursion(s,e)
// Q-3
// let start = 0;
// let fac = 2;

// function factorial(fac){
//    if(start == fac){
//        return 1
//    }
//    return fac * factorial(fac -1)
    
// }

// console.log(factorial(fac))

// q-4
function calculate(a, b, callback) {
    setTimeout(() =>  {
      const result = a + b;
      callback(result);
    }, 3000);
  }
  
  // Callback function to handle the result
  function handleResult(result) {
    console.log("Result:", result);
  }
  
  // Calling the function with the callback
  calculate(5, 10, handleResult);
  console.log("Waiting for the result...");
//   result will appear after 3 seconds