type User={
    name:string;
    email:string;
    isActive:boolean
}
const createUser=(user:User):User=>{
    return {name:"",email:"",isActive:true}
}
createUser({name:"",email:"",isActive:true})
//this is used so that instead of writing {name:"",email:"",isActive:true , u can simply use User to define the value


type user={

    readonly _id:string; //means this can only set it once & cannot be assigned twice 
    name:string;
    email:string;
    price:number;
    active:boolean,
    creditCard?:number // ? is optinal symbol
}

let myUser:user={
    _id:"12",
    name:"h",
    email:"mabsk@gmail.com",
    price:5,
    active:true,
    
}
type cardNumber={
    cardnumber:number
}
type cardDate={
    carddate:number
}
type cardDetails=cardNumber & cardDate&{
    cvv:number
}

myUser.email="akdakd@gmail.com"
//myUser._id="46"// this is coming error because _id cannot be used again due to readonly