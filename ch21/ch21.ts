let 멍멍 :(string | boolean)[] = ["dog", true];

// tuple 타입을 사용하면, 위치까지 고려하여 타입을 지정할 수 있음
let 멍멍2:[string, boolean] = ["dog", true];

// ?를 붙이면 들어와도 되고, 안들어와도 된다는 의미 옵션. 맨 뒤에만 있어야되며, 두개가 있어도 되지만, 맨뒤부터 ?가들어가야된다.
let 멍멍3:[string, boolean?] = ["dog"];

// 파라미터에도 tuple타입을 사용할 수 있다.
function 함수(...x:[number, string]){
  console.log(x)
}
// 함수(1,2,3,4,5,6);

function 함수2(a:number, b:string){
  console.log([a,b]);
}

let arr = [1,2,3];
let arr2 = [4,5];
let arr3:[...number[]] = [...arr, ...arr2];

//숙제1
let 숙제1:[string, number, boolean] = ["동서녹차", 4000, true];

//숙제2
let 숙제2:[string, number, ...boolean[]] = ["동서녹차", 4000, true, false, true, true, false, true];

//숙제3
function 숙제3(...rest:[string, boolean, ...(number|string)[]]){

}

//숙제4
function 숙제4(...rest:(number|string)[]) {
  //narrowing 을 해야되는데
  let stringResult = [];
  let numberResult = [];
  let result = [];
  for(let i of rest){
    if(typeof i === "number"){
      numberResult.push(i);
    } else{
      stringResult.push(i);
    }
  }
  result.push(stringResult);
  result.push(numberResult);
  return result;
}
console.log(숙제4('b',5,6,8,'a'));