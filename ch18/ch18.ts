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

/**
 * (숙제3) 타입 중복이 너무 많이 발생합니다.
type Dog = string;
interface Dog { name : string };

let dog1 :Dog = 'bark';
let dog2 :Dog = { name : 'paw' }
위 코드에서 에러를 없애야합니다. 어떻게 코드를 짜면 될까요? 

(조건) type Dog, interface Dog의 타입이름 변경 금지, 파일 분할 금지 
 */

namespace 하하 {
  export interface Dog { name: string };
}
type Dog = string;
let dog3 :Dog = 'bark';
let dog4 :하하.Dog = { name: 'paw' };

// 숙제3
namespace GoodDog{
  export type Dog = string;
}
namespace BadDog{
  export interface Dog { name : string };
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = {name : "paw"};