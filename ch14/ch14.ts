// narrowing 하는데 typeof 로 안된다면

function 함수(a: string | undefined){
  if( a && typeof a === "string"){
    // 이렇게 하면 undefined인지 아닌지도 narrowing이 가능하다. null 타입도 적용 가능 &&
  }
}

type Fish = {swim: string};
type Bird = {fly: string};

function 함수_1(animal: Fish | Bird){
  // animal.swim 이렇게 못쓴다 narrowing 해야함 typeof 연산자는 number string boolean
  if("swim" in animal){ // Fish 타입인지 아닌지 narrowing 방법 in 키워드
    animal.swim
  }
}

// 오브젝트 instanceof 부모class 

let 날짜 = new Date();
if(날짜 instanceof Date){
  // 이런식으로 narrowing을 한다
}

type Car1 = {
  wheel: '4개',
  color: string
}
type Bike = {
  wheel: '2개',
  color: string
}

function 함수_2(x: Car1 | Bike){
  if(x.wheel === '4개'){
    // 이건 Car1일때 ,, 속성명이 똑같으면 literal type으로 narrowing 할 수 있음. 
  }
}

// 논리적으로 이 타입인지 특정지을 수 있으면 narrowing으로 인정한다.

