"use strict";
let score = 33;
score = "name ";
let ankit = { name: "ankit", id: 5 };
// function getDbId(id:number|string){
//     console.log(`Db Id is:${id}`)
// }
getDbId(5);
getDbId("6");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id;
    }
}
//array
const data1 = [1, 2, 3, 4];
const data2 = ["1", "2", "3", "4"];
const data3 = ["1", 2, 4, 5];
let seatAllotment;
seatAllotment = "aisele";
