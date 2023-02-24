function 내함수(x:string|number){
  if(typeof x === "string"){
    return x + "1";
  }
  return x + 1;
}
// if문 써서 타입이 맞는지 확인 체크해주는걸 Narrowing이라고 한다.
// as 쓰면 assertion, if 쓰면 Narrowing 이다.

function 내함수2(x:string|number){
  let array:number[] = [];
  array[0] = x as number;
  // as 를 쓰면 파라미터가 union type일 때, 두개 중 하나를 확정하는거지, string 타입을 number로 바꾸는건 아니다.
  // as 쓰면 assertion 문법이다. 편하다고 계속 쓰면 안됨. Narrowing할때 쓰는건 맞다. 무슨타입이 들어올지 100% 확실할 때 사용한다. 그러니깐 비상용으로 쓰자. 그 전에는 <number>x 이런식으로 썼는데 react에서 html태그 요소와 비슷하게 생겨서 as 키워드만 쓰기 시작함
}

// 숙제1
function 숙제1(x:(number | string)[]){
  let result: number[] = [];
  for(let i=0; i < x.length; i++){
    result.push(Number(x[i]));
  }
  return result;
}

console.log(숙제1(['1',2,'3']));
console.log(숙제1(['33','2',1,'5',4]));

// 숙제2
let 철수 = {subject: 'math'};
let 영희 = {subject: ['science', 'english']};
let 민수 = {subject: ['science', 'art', 'korean']};

function 숙제2(x: {subject : string | string[]}){
  if(typeof x.subject === "string"){
    return x.subject;
  }
  return x.subject[x.subject.length - 1];
}

console.log(숙제2(철수));
console.log(숙제2(영희));
console.log(숙제2(민수));



// 숙제 1
function 내함수3(x:(number|string)[]) :number[]{
  
  let result :number[] = [];

  x.forEach((b) => {
    if(typeof b === "string"){
      result.push(parseFloat(b));
    } else {
      result.push(b);
    }
  })
  return result;
}
// console.log(내함수3(["1",2,"3"]));

// function 내함수4(x:(number|string)[]) :number[]{
//   let result :number[] = [];

//   for(let i=0; i< x.length; i++){
//     if(typeof x[i] === "string"){
//       result.push(parseFloat(x[i]));
//     } else {
//       result.push(x[i]);
//     }
//   }
//   return result;
// }

// 숙제 2
let 철수쌤 = { subject : "math",};
let 영희쌤 = { subject : ["science", "english"]};
let 민수쌤 = { subject : ["science", "art", "korean"]};

function 내함수5(x:{subject: string|string[]}) :string{
  if(typeof x.subject === "string"){
    return x.subject;
  }
  if(x.subject.length > 1){
    let long = x.subject.length;
    return x.subject[long - 1];
  }
  return "에러"
}
// console.log(내함수5(철수쌤));
// console.log(내함수5(영희쌤));
// console.log(내함수5(민수쌤));
