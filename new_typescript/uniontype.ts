let score:number|string =33

score="name "


type Users={
    name:string;
    id:number
}

type admin={
    username:string;
    id:number
}

let ankit:Users|admin={name:"ankit",id:5}

// function getDbId(id:number|string){
//     console.log(`Db Id is:${id}`)
// }

getDbId(5)
getDbId("6")

function getDbId(id:number|string){
   if(typeof id==="string"){
        id.toLowerCase()
   }
   else{
    id
   }
}

//array
const data1:number[]=[1,2,3,4]
const data2:string[]=["1","2","3","4"]
const data3: (number | string)[]=["1",2,4,5]

let seatAllotment:"aisele"|"middle"|"window"

seatAllotment="aisele"
