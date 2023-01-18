// type allias 라고 부른다
type Animal = string | number | undefined;

// let 동물 :string | number | undefined;
let 동물 :Animal = 123;

// object type allias도 가능
type Animal2 = { name: string, age: number};
let 동물2:Animal2 = {name: "kim", age : 20};

// type allias는 첫글자 대문자로 쓰는게 국룰, 뒤에 type이라고 카멜케이스 쓰기도 함

const 여친 = {
  name: "엠버"
}
여친.name = "유라";

// 타스쓰면 object자료 수정도 막을 수 있다

type Girlfriend = {
  readonly name: string, // 읽기전용이란 의미인 readonly이기에 수정을 할 수 없다. 수정 시 에러남
  age?: number // number | undefined 와 같은 의미
}

const 여친2: Girlfriend = {
  name: "엠버"
}
// 여친2.name = "유라"; 바꿀 때 에러가 난다

type Name = string;
type Age = number;
type Person = Name | Age; // 타입을 합칠 수 있다. 변수랑 똑같음

type PositionX = { x: number };
type PositionY = { y: number };
// {x:number, y:number 로 만들고 싶다면 &로 합친다, 이걸 object타입을 extend한다 라고 표현함}
// 같은 이름의 type은 재정의가 불가능하다. 
type NewType = PositionX & PositionY;

let position: NewType = { x: 10, y: 20};

//숙제 1
type ObjectType1 = { x: number, y: number }
type ObjectType2 = { x: string, y: string, z: number }
type ObjectType = ObjectType1 & ObjectType2;
// let obj :ObjectType = {x: 10, y:20, z: 30};
// 두개가 중복되는 속성인데 타입이 다르면 never 속성이라고 뜨며 오류가 발생한다. number, string으로 인식하지 못한다.

//숙제 2
type ObjectType3 = {color?: string, size: number, readonly position: number[]};

//숙제 3
type EmailType = {name: string, phone: number, email: string};

//숙제 4
type ObjectType4 = EmailType & {adult: boolean};

let sign :ObjectType4 = {name:"kim", phone:123, email:"dlwnsduq", adult: true};
