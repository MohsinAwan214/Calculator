const from = document.querySelector("#input_from");
const boxes1 = document.querySelector("#boxes1");
const boxes2 = document.querySelector("#boxes2");
const sum1 = document.querySelector("#sum1");
const sum2 = document.querySelector("#sum2");
const sum3 = document.querySelector("#sum3");
const result = document.querySelector(".result");




let matrix;
from.addEventListener("submit", (event) => {
  event.preventDefault();
  matrix = Number(event.target.children[0].value);
  
  boxes1.innerHTML = "";
  boxes2.innerHTML = "";
  
  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
      
      boxes1.innerHTML += `<input type="number"id="box1-${i}${j}"value="0"style="width: 40px;hight:20px;">`;
      boxes2.innerHTML += `<input type="number"id="box2-${i}${j}"value="0"style="width: 40px;hight:20px;">`;
    }
    
    boxes1.innerHTML += "<br/>";
    boxes2.innerHTML += "<br/>";
    
    
  }
  event.target.reset()
});


sum1.addEventListener("click", () => {
getSum1()
});
sum2.addEventListener("click", () => {
getSum2()
});
sum3.addEventListener("click", () => {
getSum3()
});



let getSum1 = ()=>{
  result.innerHTML = ""
  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
       let value1 = document.querySelector(`#box1-${i}${j}`).value;
       let value2 = document.querySelector(`#box2-${i}${j}`).value;

     let a = Number(value1) + Number(value2)  
     result.innerHTML += `<input style="width:40px;hight:30px; color="black" readonly value="${a}">`

}
result.innerHTML += '<br/>'
}
}
let getSum2 = ()=>{
  result.innerHTML = ""
  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
       let value1 = document.querySelector(`#box1-${i}${j}`).value;
       let value2 = document.querySelector(`#box2-${i}${j}`).value;

     let b = Number(value1) - Number(value2)  
     result.innerHTML += `<input style="width: 40px;hight:30px; color="black" readonly value="${b}">`

}
result.innerHTML += '<br/>'
}
}
let getSum3 = ()=>{
  result.innerHTML = ""
  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
       let value1 = document.querySelector(`#box1-${i}${j}`).value;
       let value2 = document.querySelector(`#box2-${i}${j}`).value;

     let c = Number(value1) * Number(value2)  
     result.innerHTML += `<input style="width: 40px;hight:30px;color="black" readonly value="${c}">`

}
result.innerHTML += '<br/>'
}
}




