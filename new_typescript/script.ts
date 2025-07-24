const getHello=(s:string):string=>{
    return ""
}

const heros=["thor","spiderman","ironman"]
//const heros=[1,2,3]

heros.map((hero):string=>{
    return'hero is ${hero}'
})


function consoleError(errmsg:string):void{
    console.log(errmsg);
    return 
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);
    
}//the never type represents values which are never observed. In return type, this means that function throws an exception or terminated execution of program 

//any
let hero:string;

function getHero(){
    return "hero"
}
hero=getHero()// whenever you dont want a value to cause typechecking errors


const getHi=(s:string):string=>{
    return ""
}
 // tyo bahira ko string bhaneko return type must be string 

 