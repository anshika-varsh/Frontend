// alert("Radhey Radhey");
// console.log("Hello");
// const mainHeading=document.getElementById("title");
// mainHeading.textContent ="Radhey Radhey";

// const button=document.getElementById("btn");
// button.onclick=function(){
    
// }

const body=document.querySelector("body");
const box=document.createElement("div");
const btn=document.createElement("button");
body.appendChild(box);
body.appendChild(btn);
btn.textContent="Click me";
// box.style.height="200px";
// box.style.width="200px";
// box.style.backgroundColor="teal";
// btn.style.height="50px";
// btn.style.width=" 200px";
// btn.style.margin="10px"
// btn.style.backgroundColor="Blue"
// btn.style.borderRadius="10px"
// btn.style.borderColor="White"
box.classList.add("small-box");
box.addEventListener("click",function(){
    box.classList.remove("small-box");
    box.classList.add("big-box");
})