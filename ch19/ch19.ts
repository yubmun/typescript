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
// console.log(숙제1<string>("hello"));
// console.log(숙제1<string[]>(["kim","park"]));

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
// console.log(숙제2<Animal>(data));

// 숙제3
class Person<Type> {
  name;
  constructor(a:Type){
    this.name = a;
  }
}
let 준엽 = new Person('어쩌구');
let 이엽 = new Person(["어쩌구", "저쩌구"]);

/**
 *  (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요? 

연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요 

(동작 예시)

함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다. 

함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다.
 */
interface myType {
  length: number;
}

function hw_1<my extends myType> (a: myType) {
  return a.length;
}
console.log(hw_1<string>("hellokkk"));
console.log(hw_1<string[]>(["kim", "park"]));


/**
 * interface Animal {
  name : string;
  age : number 
}

let data = '{"name" : "dog", "age" : 1 }'
그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다. 

data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.

근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?

오늘 배운 Generic을 이용해서 구현해보도록 합시다.  
 */
interface Animal2{
  name: string;
  age: number;
}

let data2 = '{"name" : "dog", "age" : 1 }';

function hw_2<myType> (a:string) :myType{
  return JSON.parse(a);
}

console.log(hw_2<Animal2>(data2));

/**
 * class Person {
  name;
  constructor(a){
    this.name = a;
  }
}
let a = new Person('어쩌구');
a.name
 */

class hw_3 <T>{
  name;
  constructor(a: T){
    this.name = a;
  }
}
let cc = new hw_3<string>("hello");
console.log(cc.name);
let dd = new hw_3<string[]>(["heelo", "bye"]);
console.log(dd.name);
let ee = new hw_3<number>(123);
console.log(ee.name);
