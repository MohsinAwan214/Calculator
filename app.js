const from = document.querySelector("#input_from");
const boxes1 = document.querySelector("#boxes1");
const boxes2 = document.querySelector("#boxes2");
const sum = document.querySelector("#sum");
const result = document.querySelector(".result");




let matrix;
from.addEventListener("submit", (event) => {
  event.preventDefault();
  matrix = Number(event.target.children[0].value);
  
  boxes1.innerHTML = "";
  boxes2.innerHTML = "";
  
  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
      
      boxes1.innerHTML += `<input type="number"id="box1-${i}${j}"value="0"style="width: 40px;hight:30px;">`;
      boxes2.innerHTML += `<input type="number"id="box2-${i}${j}"value="0"style="width: 40px;hight:30px;">`;
    }
    
    boxes1.innerHTML += "<br/>";
    boxes2.innerHTML += "<br/>";
    
    
  }
});




sum.addEventListener("click", (app) => {
  result.innerHTML = ""
  for (let i = 0; i < matrix; i++) {
    for (let j = 0; j < matrix; j++) {
       let value1 = document.querySelector(`#box1-${i}${j}`).value;
       let value2 = document.querySelector(`#box2-${i}${j}`).value;

     let a = Number(value1) + Number(value2)  
     result.innerHTML += `<input style="width: 40px;hight:30px; readonly id="" value="${a}">`

}
result.innerHTML += '<br/>'
}

});




