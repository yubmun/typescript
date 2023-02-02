interface StringOnly{
  [key: string] : string;
  // index signature라는 문법, object 타입지정이 한번에 가능하다.
  // age: number; 이건 안된다. 모든걸 string 타입으로 선언했기에 그렇다.
  age: "20" // 리터럴 타입도 허용은 된다.

  // key 값에 문자가 아닌 숫자가 들어가있어도 index signature 문법이 가능하다, 배열도 가능하다
  // [key: number] : string;
}
let user:StringOnly = {
  name: "kim",
  age: "20",
  location: "seoul"
}

// 이럴때는 어떻게 자료타입을 지정하는가
let css:MyType2 = {
  "font-size":{
    "font-size":{
      "font-size": 14
    }
  }
}

interface MyType{
  "font-size":{
    "font-size":{
      "font-size":number
    }
  }
}
// 이렇게 구조가 똑같은 인터페이스를 만들어도 된다.

interface MyType2{
  "font-size":MyType2 | number;
  //"font-size":{"font-size": MyType2} 와 같은의미, 한줄로 써줄수 있다.
}

// 쓸일은 많이 없다.

//숙제1
interface Hw1{
  [key: string]: string|number
}
let obj:Hw1 = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장"
}

// 숙제2
interface Hw2{
  "font-size":number;
  [key: string]: Hw2 | number;
}
let obj2: Hw2 = {
  "font-size": 10,
  "secondary": {
    "font-size": 12,
    "third": {
      "font-size": 14
    }
  }
}