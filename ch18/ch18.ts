import { 이름, 나이 } from "./a";
///<reference path="./a.ts"/>
import { Car, Bike, No } from "./a";

console.log(이름);
console.log(나이);

// let 변수: 네임스페이스.Name = 'park';
// import export 전에는 레페런스로 대신해서 사용했다.

// 숙제1
let 숙제변수:Car = {
  wheel: 2,
  model: '포니'
}
let 숙제변수2:Bike = {
  wheel: 2,
  model: '전기자전거'
}

let 함수:No = () => {
  console.log("Hello World!");
}

// 숙제3
namespace GoodDog{
  export type Dog = string;
}
namespace BadDog{
  export interface Dog { name : string };
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = {name : "paw"};