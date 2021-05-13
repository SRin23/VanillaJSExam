const elsaInfo = {
  name : "Elsa", 
  age : 20, 
  getder:"Female",
  canMagic : true
}
//console => object, log => key(function)
//console.log(), alert()와 같은것들은 내장함수
console.log(elsaInfo.age);
console.log(elsaInfo, console)
console.log("\n")

console.log("Hello Elsa")
console.log("Hello Anna")
console.log("Hello Sven")
console.log("Hello Olaf" + "\n")

function sayHello(name, age){
  console.log("Hello!", name, "You have",age, "years of age");
}
function sayHello2(name, age){
  console.log(`Hello! ${name}, You have ${age} years of age`)
}
function sayHello3(name, age){
  return (`Hello! ${name}, You have ${age} years of age`);
}

sayHello("Elsa", 20);

//greetElsa는 sayHello2의 실행된 결과값이다?
const greetElsa = sayHello2("Elsa", 20) //return : undefined
console.log(greetElsa);

const greetAnna = sayHello3("Anna", 15);
console.log(greetAnna)


const calculator = {
  plus : function(a, b){
    return a+b;
  },
  minus : function(a, b){
    return a-b;
  },
  divide : function(a, b){
    return a/b;
  },
  multi : function(a, b){
    return a*b;
  },
  pow : function(a, b){
    return a**b;
  }
}
const plus = calculator.plus(5,5)
const minus = calculator.minus(8,5)
const divide = calculator.divide(10,5)
const multi = calculator.multi(5,5)
const pow = calculator.pow(5,2)
console.log(plus)
console.log(minus)
console.log(divide)
console.log(multi)
console.log(pow)
