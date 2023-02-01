function 함수 (x:unknown[]){
  return x[0]
}

let a = 함수([4,2]); // 타입이 unknown
// console.log(a);// 4 출력

// Generic 함수는 파라미터로 타입을 입력하는 함수

function 함수2<MyType>(x:MyType[]) :MyType{
  return x[0]
}
let b = 함수2<number>([4,2]);
let c = 함수2<string>(['4','2']); // 확장성이 좋다.

// 파라미터 제한두기 extends 자료형 작성하면, MyType이 extends뒤에 있는 자료형과 일치한지 체크한다.
function 함수3<MyType extends number>(x:MyType){
  return x-1;
}
let d = 함수3<number>(100);

// 기본자료형 말고도 커스텀 타입도 가능
interface LengthCheck{
  length: number
}
function 함수4<MyType extends LengthCheck>(x: MyType){
  return x.length;
}
let e = 함수4<string[]>(['100']);

// 숙제 1
interface Hw{
  length: number,
}
function 숙제1<MyType extends Hw> (x: MyType){
  return x.length;
}
console.log(숙제1<string>("hello"));
console.log(숙제1<string[]>(["kim","park"]));

/**
 * function 숙제1<Mytype extends string | string[]>(x: MyType){
 *   console.log(x.length);
 * }
 */

// 숙제2
interface Animal {
  name : string,
  age : number
}
let data = '{"name" : "dog", "age": 1}'

function 숙제2<Type>(x:string) :Type{
  return JSON.parse(x);
}
console.log(숙제2<Animal>(data));

// 숙제3
class Person<Type> {
  name;
  constructor(a:Type){
    this.name = a;
  }
}
let 준엽 = new Person('어쩌구');
let 이엽 = new Person(["어쩌구", "저쩌구"]);