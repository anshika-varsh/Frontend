// const input=document.querySelector('#name');
// const ouput=document.querySelector('#output');
// input.addEventListener('input',e=>{
//     output.textContent=`Hello,${e.target.value || 'stanger'}!`;
// });
// const form=document.querySelector('#form');

// const ouput=document.querySelector('.output');
// form.addEventListener('submit',function(e){
//     e.preventDefault();
//     const input=document.querySelector('#email').value;
//     ouput.textContent=`Welcome,${input}!`;
//     form.reset();
// })
// window.addEventListener('scroll',()=>{
//     const scrollTop=window.scrollY;
//     const TotalHeight=document.body.scrollHeight-window.innerHeight;
//     const scrolled=(scrollTop/TotalHeight)*100;
//     document.querySelector('#progress').style.width=scrolled+'%';
// })

// window.addEventListener('resize',()=>{
//     const width=window.innerWidth;
//     const height=window.innerHeight;
//     console.log(`Window Size:${width}px X ${height}px`);
// })


// document.querySelector('.text').addEventListener('copy',e=>{
//     e.preventDefault();
//     alert('No copying Daam nahi hai 😜')
// })
// document.querySelector('.Paste').addEventListener('paste',(e)=>{
//     e.preventDefault();
//     let text=e.clipboardData.getData('text');
//     e.target.value=text.toUpperCase();
// })



// document.getElementById('link').addEventListener('click', e => {
//   e.preventDefault();
//   alert("No redirecting today!");
// });

// document.getElementById('parent').addEventListener('click', () => alert('Parent clicked!'));
// document.getElementById('child').addEventListener('click', e => {
//  e.stopPropagation();
//   alert('Child only!');
// });

// document.getElementById('buttons').addEventListener('click',()=>{
//     alert("Clicked on parent");
// });
// document.getElementById('child').addEventListener('click',()=>{
//     alert("Clicked on child");
// })

// function addstyle(event){
//     if(event.target.nodeName==='LI'){
//         event.target.style.textDecoration='line-through';
//     }
// }

// document.getElementById('list').addEventListener('click',addstyle);

// let list=document.getElementById('list');
// let addItem=document.getElementById('addfirst');
// function createItem(text){
//     const li=document.createElement('li');
//     li.innerHTML=`
//     ${text}
//     <button class="add">Add</button>
//     <button class="Delete">Delete</button>
//     `;
//     return li;
// }
// addItem.addEventListener('click',()=>{
//     list.appendChild(createItem("New Item"));
// });
// list.addEventListener('click',function(e){
//     if(e.target.classList.contains('add')){
//         const newItem=createItem("New Text");
//         e.target.parentElement.insertAdjacentElement('afterend',newItem);
//     }
// });
// list.addEventListener('click',function(e){
//     if(e.target.classList.contains('Delete')){
//         e.target.parentElement.remove();
//     }

// });
// const form1=document.querySelector('#form');
// const checkbox=document.querySelector('#checkbox');
// const msg=document.querySelector('.msg');
// form1.addEventListener('submit',function(e){
//     if(!checkbox.checked){
//         e.preventDefault();
//         msg.textContent = "⚠ You must agree before submitting!";
//         msg.style.color="red";
//     }
//     else{
//         msg.textContent="";
//         alert("Submitted");
//     }
// });











