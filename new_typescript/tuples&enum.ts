//const user:(string|number)[]=["hc",1]
// the order of array shoulkd be precise
let users:[string,number,boolean]

users=["hc1",13,true]
let rgb:[number,number,number]=[255,255,255]

type duser=[number,string]

const newuser:duser=[25,"dmad"]
newuser[1]="ndn"
newuser.push(1,"daad","dasda")



//enums exist because to restirct something

enum SeatChoice{
    ielts="hello",
    Ai=10, //now the number will serially increase
    middle,
    final,
    Fourth 
}
const hcSeat=SeatChoice.Fourth