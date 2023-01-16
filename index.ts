const 이름 :string[] = ["kim", "park"];
const 오브젝트 :{name? : string} = {name : "kim"};
// ? 는 옵션으로, 들어와도 되고 안들어와도 된다 라는 의미

const 새로운이름 : string | number = 123;
// or 연산자로 여러 타입을 지정할 수 있음.

// 타입은 변수에 담아서 쓸 수 있음
type 내타입 = string | number;
const 변수 :내타입 = 123;

// return 값의 타입도 정해줄 수 있다.
function 함수(x:number) :number{
  return x * 2
}

type Member = [number, boolean];
let john:Member = [123, true];

type Member2 = {
  [key :string] : string,
}
let john2 : Member2 = { name : "kim" };

class User {
  name :string;
  constructor(name :string){
    this.name = name;
  }
}
