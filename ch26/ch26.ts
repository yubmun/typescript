// 타입을 한번에 바꿀 수 있다.
let obj = {
  name: "kim",
  age: 20
}
Object.keys(obj); // object자료형에 있는 모든 key들을 배열에 넣어준다.

interface Person{
  age: number,
  name: string,
}

type PersonKeys = keyof Person // "age"|"name" 이라는 유니온 타입이 남게된다.
let a:PersonKeys = "age"

type Car = {
  color: boolean,
  model: boolean,
  price: boolean | number,
}
// 전부 string 타입으로 변환하고자 한다면

type TypeChanger<MyType> = {
  [key in keyof MyType]: string;
}
type NewCar = TypeChanger<Car>; // Car 에 있는 모든 타입이 NewCar에선 모두 string 타입으로 변환되었다.

/**
 * 숙제1) 다음 타입을 변환기를 돌려보십시오.
type Bus = {
  color : string,
  model : boolean,
  price : number
}
동료가 잘못 만든 타입입니다.
color, model, price 속성은 전부 string 또는 number 타입이어야합니다.

1. 변환기 하나 만드시고

2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.
 */

type TypeChanger2<Bus> = {
  [key in keyof Bus]: string | number;
}
type newType = TypeChanger2<Bus>;

/**
 * (숙제2) 이런 변환기는 어떻게 만들어야할까요?

object안에 들어있는 모든 속성을

string, number 이렇게 고정된 타입으로 변환해주는게 아니라

내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.
 */

type TypeChanger3<Bus, T> = {
  [key in keyof Bus]: T;
}
type NewType2 = TypeChanger3<Bus, string>;

//숙제1 
type Bus = {
  color: string,
  model: boolean,
  price: number,
}
type Hw1<Hw1Type> = {
  [key in keyof Hw1Type]: string | number;
}
type NewBus = Hw1<Bus>;

//숙제2
type Hw2<Hw2Type,T> = {
  [key in keyof Hw2Type]: T;
}
type Bike = {
  color: string,
  model: boolean,
  price: number,
}
type NewBike = Hw2<Bike, boolean|string|number>;

let obj4:NewBike = {
  color: "red",
  model: true,
  price: 4000
}