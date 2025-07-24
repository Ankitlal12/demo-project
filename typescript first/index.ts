// const button = document.querySelector("button")! as HTMLButtonElement;

// const input1=document.getElementById("num1")! as HTMLInputElement;
// const input2=document.getElementById("num2") ! as HTMLInputElement;

// function add(num1:number,num2:number){
//     return num1+num2;
// }

// button.addEventListener("click",function(){
//     console.log(add(+input1.value,+input2.value));
// })

type Test = { name: string; age: number; hobbies: { name: string }[] };

const test: Test = { name: "John", age: 30, hobbies: [{ name: "Studying" }] };

// type inference, type casting, 
