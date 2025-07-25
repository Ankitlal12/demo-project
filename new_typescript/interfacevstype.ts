//difference between type aliases and interfaces-all feature of interface are available in type , the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable


interface Userss{
    readonly dbId:number
    email:string,
    userId:number
    googleId? :string
    //startTrail:()=>string
    startTrail():string
    getDiscount(couponname:string,value:number):number
}
interface Userss{
    githubToken:string;
}
interface Admin extends Userss{
    role:"admin"|"ta"|"learner"
}
const hello : Admin={dbId:546,email:"h@lnaad",userId:166,githubToken:"github",
    role:"admin",
startTrail:()=>{
    return "trial"
},
getDiscount:(name:"ankit",off:10)=>{
    return 10
}
}


hello.email="kasbdda.com"
hello.dbId==33





