//THIS IS COMMNAT
//MY FIRST JS FILE!!!!
/*
  IT'S MULTILINE COMMNAT!!
  HELLO
*/

console.log("I'm Working. I'm JS. I'm nice. I'm happy now."); 
//JS는 위에서 아래로 실행

//variable(변수) : 변경하거나, 변경할수있는 값
//모든 표현식 뒤에는 ;(세리콜론)을 사용

//변수 사용시 let 변수명으로 선언
//변수 초기화나 생성시 let을 쓰지만, 사용할때는 let안 씀
//만약 let을 쓰지 않고 바로 a = 1이라사용하면, 이미 초기화하고 사용한것처럼 작동(좋지 않음)

let a = 221
let b = a-5 
/*
  --변수 사용 방법-- 
  1. Create(선언)
  2. Initialize(초기화) - 선언과 함께 쓸수있음
  3. Use(사용)
*/

//출력
console.log(a)  //221
console.log(b)  //216

//a를 4로 수정(대체) -> let사용 안함
a = 4;
console.log(a);

//const[상수] : 값이 변하지 않음
const c = 300;
console.log(c);
// c = 10; //상수의 값을 바꾸었으므로 Error가 난다.
// console.log(c);


//var = variable -> 변수를 나타냄
//var도 let처럼 값을 바꿀수있다 -> 하지만 잘 사용 안함