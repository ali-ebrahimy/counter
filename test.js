const pNumber = document.querySelector(".number");
const btnIncrese = document.querySelector(".increseBtn");
const btnReset = document.querySelector(".resetBtn");
//const btnDecrese = document.querySelector(".decreseBtn");
const btnList = document.querySelectorAll(".btn");


//  solution 1

let newNum=0;

btnList.forEach((element) => {
  element.addEventListener("click",()=>{
    const classList = element.classList;
    if(classList.contains('decreseBtn'))newNum--;
    else if(classList.contains('increseBtn'))newNum++;
    else newNum = 0;
    pNumber.textContent=newNum;
  })
});

//  solution 2

// // increse function

// btnIncrese.addEventListener("click",function(){
//   // newNum=Number(pNumber.innerHTML)+1;
//   // pNumber.innerHTML=newNum;
//   newNum++;
//   pNumber.textContent=newNum;
//   if(newNum>0){
//     pNumber.style.color="green";
//   }
//   if(newNum==0){
//     pNumber.style.color="#fff";
//   }
// })

// // reset function

// btnReset.addEventListener("click",function(){
//   // pNumber.innerHTML=0;
//   newNum=0;
//   pNumber.textContent=newNum;
//   pNumber.style.color="#fff";
// })

// // decrese function

// btnDecrese.addEventListener("click",function(){
//   // newNum=Number(pNumber.innerHTML)-1;
//   // pNumber.innerHTML=newNum;
//   newNum--;
//   pNumber.textContent=newNum;
//   if(newNum<0){
//     pNumber.style.color="red";
//   }
//   if(newNum==0){
//     pNumber.style.color="#fff";
//   }
// })
