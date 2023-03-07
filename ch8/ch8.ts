// 파라미터는 string, return은 number type
type 함수타입 = (a:string) => number;

function 함수() {

}
// 함수 type alias는 함수 표현식만 쓸 수 있음
let 함수1:함수타입 = function (){
  return 1
}

// object 안에 함수 만들 수 있다.
type 함수타입2 = (a:number) => number

let 회원정보 = {
  name: "kim",
  plusOne(a: number) :number{
    return a + 1;
  },
  // plusOne 함수에 파라미터도 number type , return값도 number 타입을 표시함
  changeName: () => {} //이렇게도 쓸 수 있다.
}

회원정보.plusOne(1);

// function 함수2(a){
//   a()
// }

// function 함수3(){

// }
// 함수2(함수3);

// 숙제 1

type Member = {
  name: string,
  age : number,
  plusOne : (x:number) => number,
  changeName: () => void,
}

let 회원정보1:Member = {
  name: "kim",
  age: 30,
  plusOne(x) {
    return x + 1;
  },
  changeName : () => {
    console.log("안녕")
  }
}

// 숙제2
type 숙제2 = (a:string) => string;
type 숙제21 = (a:string) => number;

let cutZero:숙제2 = (a) => {
  if(a[0] === "0"){
    return a.replace(/^0+/, "");
  }
  return a;
}
console.log(cutZero("0912"));

let removeDash:숙제21 = (a) => {
  if(a.includes("-")){
    return parseFloat(a.split("-").join(""));
  }
  return parseFloat(a);
}
console.log(removeDash("941103-1313132"));


// 숙제3
type 숙제3 = (a: string, b:숙제2, c:숙제21) => void
let 만들함수:숙제3 = (a:string, b=cutZero, c=removeDash ) => {
  let result = b(a);
  console.log(c(result));
  return c(result);
}
console.log(만들함수("010-1111-2222", cutZero, removeDash));

