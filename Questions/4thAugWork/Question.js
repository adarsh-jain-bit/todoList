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
let x = 10
let y = 1

function Recursion(x,y){
    console.log(x)
 if(x <= y){
        return y
    }
    x--
   Recursion(x,y)
    
    
}
Recursion(x,y)

// Q-3
let start = 0;
let fac = 2;

function factorial(fac){
   if(start == fac){
       return 1
   }
   return fac * factorial(fac -1)
    
}

console.log(factorial(fac))