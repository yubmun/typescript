
class Person1 {
  // 필드 값을 써야 constructor에 추가할 수 있음, js에서는 안써도 가능함
  data :number = 0;
  name :string;

  constructor(a: string){
    this.name = a;
  }
  함수(a: string = "world"){
    console.log("hello" + a)
  }
}

let 사람1 = new Person1("kim");
let 사람2 = new Person1("park");
// 사람1.data 필드값 따라 0이 나옴
// 사람2.함수("안녕"); 

/**
 * 숙제 1 Car 클래스를 만들어보자
 */
class Cars{
  model: string;
  price: number;

  constructor(a: string, b: number){
    this.model = a;
    this.price = b;
  }
  tax() :number{
    return this.price / 10;
  }
}
let variable = new Cars("소나타", 3000);

/**
 * 숙제2
 */

class Words{
  num: number[];
  str: string[];

  constructor(...param: (string | number)[]){
    let strArr: string[] = [];
    let numArr: number[] = [];

    param.forEach((x) => {
      if(typeof x === "string"){
        strArr.push(x);
      } else if (typeof x === "number"){
        numArr.push(x);
      }
    })
    this.num = numArr;
    this.str = strArr;
  }
}
let test1 = new Words('kim', 3, 5, "park");


// 숙제 1
class Car {
  model: string;
  price: number;

  constructor(a:string, b:number){
    this.model = a;
    this.price = b;
  }
  tax() :number{
    return this.price * 0.1;
  }
}
let car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());

// 숙제 2
class Word {
  num;
  str;

  constructor(...param: (string|number)[]){
    let 숫자들 :number[] = [];
    let 문자들 :string[] = [];
  
    param.forEach((i) => {
      if (typeof i === "string"){
        문자들.push(i)
      } else {
        숫자들.push(i);
      }
    })

    this.num = 숫자들;
    this.str = 문자들;
  }
}
let obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);