// alert("Radhey Radhey");
// console.log("Hello");
// const mainHeading=document.getElementById("title");
// mainHeading.textContent ="Radhey Radhey";

// const button=document.getElementById("btn");
// button.onclick=function(){
    
// }

// const body=document.querySelector("body");
// const box=document.createElement("div");
// const btn=document.createElement("button");
// body.appendChild(box);
// body.appendChild(btn);
// btn.textContent="Click me";
// // box.style.height="200px";
// box.style.width="200px";
// box.style.backgroundColor="teal";
// btn.style.height="50px";
// btn.style.width=" 200px";
// btn.style.margin="10px"
// btn.style.backgroundColor="Blue"
// btn.style.borderRadius="10px"
// btn.style.borderColor="White"
// box.classList.add("small-box");
// box.addEventListener("click",function(){
//     box.classList.remove("small-box");
//     box.classList.add("big-box");
// })

// const Person=function(name,age){
//     this.name=name;
//     this.age=age;
// }
// Person.prototype.introduce=function(){
//     console.log(`Hi,my name is ${this.name} and I am ${this.age} years old`);
// }

class Person{
    constructor(name,age){
        this.firstName=name;
        this.age=age;
    }
    introduce(){
        console.log(`Hi,my name is ${this.firstName} and I am ${this.age} years old`);
    }
}

const person1=new Person("Anshika",18);
person1.introduce();
