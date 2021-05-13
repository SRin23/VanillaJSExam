console.log(document)

const title = document.getElementById("title")
console.log(title)

//DOM(Document Object Module) : html에 있는모든요소를 가져와 객체로 변환하는것

title.innerHTML = "HI! From JS";
title.style.color = "red"
console.dir(document)
document.title = "I own you now";

/*
function ahdleResize(event){
  console.log(event);
}
*/

function handleResize(){
  console.log("I have been resized")
}
function handleClick(){
  title.style.color = "yellow"
}

window.addEventListener("resize", handleResize);

title.addEventListener("click", handleClick)
