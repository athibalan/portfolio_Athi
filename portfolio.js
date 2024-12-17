let div=document.querySelectorAll(".jsdiv")
let nav=document.getElementById("nav")
let svg =document.getElementById("svg")
let i=1;
svg.addEventListener("click",()=>{
    
    if(i==1)
        {
nav.style.display="block" 
nav.style.color="#fff";
 nav.style.backgroundColor="#fff"
nav.style.display="grid"
nav.style.gridGap="20px"
nav.style.padding="10px"
 nav.style.transition=".5s";
 

   i++;
   } 
   else{
    
    nav.style.display="none"

    i--;

   }

 }) 

 let submit=document.getElementById("bts")
 submit.addEventListener("click",()=>{
  let input1=document.getElementById("un")
 let input2=document.getElementById("ue")
 let input3=document.getElementById("up")
 let input4=document.getElementById("ta")

// window.location.reload()  
 input1.value=""
 input2.value=""
 input3.value=""
 input4.value=""

 })