// interface에 대해 알아본다

// type square = {color: string, width: number} 위아래 같은 의미
interface square {
  color: string;
  width: number
}

let 네모 :square = {
  color: "red",
  width: 100,
}

// 깜짝 퀴즈
let 학생1: School = { name: "kim" }
let 선생1: School = { name: "kim", age: 20 }

interface School {
  name: string;
  age?: number;
}
/**
 * interface, type alias 중 왜 interface를 쓰는가?
 * extends가 가능하기에 그렇다. 상속이 가능하다.
 * 물론 type alias도 가능하다. & 연산자로! 전문용어로 intersection type 이라고 함.
 * type Animal = { name: string }
 * type Cat = { age: number } & Animal
 * 단, 복사한다기보단 두 타입을 전부 만족하는 타입이라는 뜻이다.
 * interface도 & 연산자를 써서 합칠 수 있다.
 * 
 * type vs interface
 * interface는 중복 선언이 가능하다. (같은 이름으로 선언이 가능함 type alias은 안됨)
 * 중복선언을 하면 interface에서 먼저 선언한것과 뒤에 선언한게 합쳐진다. 자동으로 extends가 된다고 보면 됨.
 * 
 * interface가 추후에 추가, 수정, 상속 관련해서 작업이 더 수월하기 때문에 라이브러리에서 interface가 아주 많다.
 * 선택하기 나름이지만, interface 쓰는게 더 편리할 것 같다.
 * 
 * extends 할때 중복 속성이 발생하게 되면, 컴파일 에러로 잡아주기에 바로잡을 수 있음.
 * 근데, & 연산자로 합쳐졌을때는? 컴파일에러가 안나서 바로잡아주지 않으며, 중복속성의 타입이 never가 됨.
 * string 타입도 만족하고 number 타입도 만족하는 타입은, 없기 때문에 never 타입으로 설정된다.
 */

interface Jun {
  age: number;
}

interface Yub {
  age: string;
}

let 내나이는: Jun & Yub = {age : 50}

interface hw_1 {
  brand: string;
  serialNumber: number;
  model: string[];
}

interface hw_2 {
  product: string,
  price: number
}

let cart3: hw_2[] = [{product: "청소기", price: 7000}, {product: "삼다수", price: 800}]

interface hw_3 extends hw_2{
  card: false;
}

interface hw_4 {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let fourQ: hw_4 = {
  plus(a, b){
    return a + b
  },
  minus(a, b){
    return a - b
  }
}



// interface도 앞글자는 대문자로 처리한다.
interface Student{
  name: string
}
// extends쓰면 복사 붙여넣기 기능임
interface Teacher extends Student{
  age: number;
}

let 학생:Student = {name : "kim"}
let 선생:Teacher = {name: "kim", age: 20}

// type alias도 extends기능이 된다

type Animal1 = {name: string};
type Cat = {age:number} & Animal1; // &기호는 intersection type ,,이게 extends랑 똑같은 방식
// intersection type은 근데 복사가 아니라 교차 하라는 뜻이라 조금 다른 의미긴 하다.

// type vs interface
// interface는 중복선언 가능, 중복해서 쓰면 두개가 합쳐진다, 자동으로 extends가 된다 라고 보면 된다. 라이브러리 같은 경우에 interface로 많이 쓰임, 개발자에 따라 타입을 추가, 삭제 하는 등 커스텀할 수 있기 때문이다.
// type 은 중복선언 불가능

// extends 쓸 때 중복속성 발생하면? 에러로 잡아준다. 대신 intersection type은 중복 안잡아준다. never 타입이 생겨버림 , interface가 더 안전하다.

//숙제1
interface Product{
  brand: string;
  serialNumber: number;
  model: string[];
}
let 상품: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"]
}

// 숙제2
interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [{
  product: "청소기",
  price: 7000
},{
  product: "삼다수",
  price: 800
}]

// 숙제3
interface Cart2 extends Cart {
  card: boolean;
}

// 숙제4
interface Hw4 {
  plus: (a:number, b:number) => number;
  minus: (a:number, b:number) => number;
}
let 숙제4: Hw4 = {
  plus(a,b){
    return a + b;
  },
  minus(a,b){
    return a - b;
  }
}

