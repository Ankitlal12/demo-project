"use strict";
// function combine(input1:any,input2:any){
function combine(input1, input2, resultConversion) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //  }
    //  if(resultConversion==='Hello  Kitty'){
    // return +result;}  
    //   else{
    //     return result.toString()
    //   }
}
const combinedAges = combine(26, 30, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('26', '30', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('MAX', 'ANNA', 'as-text');
console.log(combinedNames);
