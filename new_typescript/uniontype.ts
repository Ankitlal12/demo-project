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
