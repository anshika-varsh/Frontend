// const a=20;
// var b=21;
// b=30;
// console.log(a,b);


// console.log("Hello World");
// // Only for var hoisting can be done 
//  console.log(c); 
//  var c=10;
//  let d=65;
//  let e="A"; 
//  console.log(d==e);

//  console.log(("Anshika"||0)&&(null&&1));
 

//  function createCounter() {      //Clouser Concept
//   let count = 0;

//   return function() {
//     count++;
//     console.log(count);
//   };
// }

// const counter1 = createCounter();
// let count=0;


// counter1(); // 1

// counter1(); // 2

// let strnum="18";
// let convertednum=Number(strnum);
// console.log(typeof(convertednum));

// const arr=new Array(8);
// console.log(arr);

// const start=[1,2,3,4];
// const end=[5,6,7,8];
// const newArr=[];
// for(let num of start){
//     newArr.push(num);
// }
// for(let num of end){
//     newArr.push(num);
// }
// console.log(newArr);

// const newArr=start.concat(end);
// console.log(newArr);


const arr=[10,20,30,85,40,50,60,85,95];
// console.log(arr.lastIndexOf(85));
// const index=arr.indexOf(85);
// console.log(index);
// arr.pop();
// arr.shift();
// const va=arr.unshift();
// console.log(va);
// console.log(arr);
// arr.shift();

// const double=arr.map((n)=>n*2);
// const third=arr.map(function(value){
//     return value*3;
// })
// const filterArr=arr.filter((n)=>(n%2===0))
// // console.log(third);
// // console.log(double);
// // console.log(arr);
// console.log(filterArr);
// const arr1=[10,20,30,85,40,50,60,85,95];
// const firstEven=arr.filter((num)=>(num%2===0));
// console.log(firstEven[0]);
// const arr2=[10,7,2,3,4,5,8,4,11,17,19];
// const primeArr=arr2.filter((num)=>{
    
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// });  
// console.log(primeArr);

// const isOdd= num => num%2 ===0 ;
// console.log(isodd(7))

// const greet= naam => "Hello, "+ naam +"!";
// const add= (num1,num2) => num1+num2;
// console.log(greet ("Anshika")); 

// const name="Anshika";
// const points=120;
// const message= `hey ${name},you have ${points} points!`;
// console.log(message);

// const person={
//     FirstName:"Anshika",
//     lastName:"Varshney",
//     age:21,
// }
// person.introduce=function(){
//         console.log(`Hi my name is ${person.FirstName} ${person.lastName} and i am ${person.age} year old `);
//     }
// person.introduce();

// const num=[1,2,3,4,5,6,7,8];  //Array Destructurting
// const[,second, , , fifth]=num;
// console.log(second,fifth);

// const person={
//     name:"Anshika",
//     age:25,
// };
// const{name:naam,age:umr}=person;
// console.log(naam);
// console.log(umr);

// const num=[1,2,3,4,5,6,7,8];  //Array rest method
// const [first,second, ...rest]=arr;
// console.log(first,second,rest);

// const arr1=[1,2,3,4,5,6,7,8];  //Array spread method
// const arr2=[9,10,11,12];
// const result=[...arr1,...arr2];
// console.log(result);

// const name="Anshika";
// const age=18;
// const person={
//     name,age
// };

// const person1{
//     naam:name,age:age
// }

// console.log(10);
// console.log(30);
// console.log(40);
// setTimeout(()=>console.log("hello"),3000);
// console.log(50);

// let count=1;
// const timer=setInterval(()=>{
//     console.log("Hello"+count);
//     count++;
//     if(count>5) clearInterval(timer);
// },1000
// );

let count=10;
const timer=setInterval(()=>{
    console.log(count);
    count--;
    if(count==0){
        console.log("boom");
    }
    else if(count<=0) clearInterval(timer);
},1000
);









