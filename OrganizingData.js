//JS는 camelCase로 변수 작성
//Array(데이터를 리스트같이 저장) : 여러 data들을 하나로 묶음
const Monday = "Mon";
const Tuesday = "Tue";
const Wednesday = "Wed";
const Thursday = "Thu";
const Firday = "Fri";
const Saturday = "Sat";
const Sunday = "Sun";

console.log(Monday, Tuesday, Wednesday, Thursday, Firday, Saturday, Sunday)
console.log("\n")

//Array -> 0부터 시작
//값이 없는 Array에 접근  -> undefined
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", true, 10, 3.14, Monday];
console.log(daysOfWeek);
console.log("\n")

console.log("daysOfWeek[2] : " + daysOfWeek[2]);
console.log("daysOfWeek[8] : " + daysOfWeek[8]);
console.log("\n")

//Object : 각 value에 이름을 줄 수 있다
const name = "Elsa";
const age = 20;
const woman = true;
const living = "ice";

console.log(name, age, woman, living);
console.log("\n")

//name is not text -> it's variable
//object안에 array를, Array안에 object를 넣을수 있다.
const elsaInfo = {
  name : "Elsa",
  age : 20,
  woman : true,
  living : "ice", 
  favSongs:["Let it Go", "Love is Open Door", "Summer"],
  favFood:[
    {
      name : "iceCream", 
      isCold : true, 
      num: 2
    }, 
    {
      name : "soup", 
      isCold:false, 
      num:1
    }
  ]
}
console.log(elsaInfo)
console.log("\n")

console.log("elsaInfo.name : " + elsaInfo.name)
console.log("elsaInfo.living : " + elsaInfo.living)
console.log("elsaInfo.favSongs : " + elsaInfo.favSongs)
console.log("elsaInfo.favSongs[0] : " + elsaInfo.favSongs[0])
console.log("elsaInfo.favFood[0].name : " + elsaInfo.favFood[0].name)
console.log("elsaInfo.favFood[1].name : " + elsaInfo.favFood[1].name)

//elsaInfo.living값을 수정
elsaInfo.living = "castle";
console.log("elsaInfo.living : " + elsaInfo.living)

