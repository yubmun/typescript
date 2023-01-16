// 문자 혹은 숫자가 들어올 수 있는 변수는? or연산자로 써서 쓰는걸 Union 타입이라고 한다.
let 둘다:number | string = "kim";
let 셋다:(number|string|boolean) = true; // () 써주는건 자유

둘다 = 123;
셋다 = "셋다된다";

let 어레이:(string|number)[] = [1,'2',3]; // number | string[] 이건 1234, ["kim","lee"]이런거임
let 오브젝:{a:string|number} = { a : "123"};

let 애니:any; // 모든 자료형을 허용해준다. 타스를 쓰는 이유가 없어진다. 
애니 = 123;
애니 = true;

let 언노운:unknown; // any와 매우 유사한 타입, 용도도 똑같음 이름만 다름. 조금더 안전하다. 왜? 언노운은 number 타입도 아니라서 연산이 안된다. 

// let 변수1:string = 언노운; 이건 안되지만 애니는 할당이 되는게 문제임 애니는 바이러스같은 존재

let age:string|number;
//age + 1; 타스는 엄격해서 이거 계산 안됨


// 문제1
let user:string = "kim";
let age1:number|undefined = undefined;
let married:boolean = false;
let 철수:(string|number|undefined|boolean)[] = [user, age1, married];

// 문제2
let 학교:{score: (number|boolean)[], teacher: string, friend:string|string[]} = {
  score: [100,97,84],
  teacher: "Phil",
  friend: "John"
}
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];



