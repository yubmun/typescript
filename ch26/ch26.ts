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