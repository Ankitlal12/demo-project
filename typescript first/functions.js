"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('result :' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 * n2;
    cb(result);
}
printResult(add(5, 13));
let combineValues;
combineValues = add;
//combineValues=printResult;
//combineValues=5;
console.log(combineValues(8, 8));
//let someValue:undefined;
addAndHandle(10, 20, (result) => {
    console.log(result);
    return result;
});
