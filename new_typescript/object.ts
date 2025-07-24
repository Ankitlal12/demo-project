const User={
    name:"ankit",
    email:"shresthaankitlal@gmail.com",
    isActive:true
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

let newUser={name:"ankit",isPaid:false,email:"lal@gamil.com"}

createUser(newUser)

function createCourse():{name:string,price:number}{
    return {name:"reactjs",price:99}
}

export{}