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

