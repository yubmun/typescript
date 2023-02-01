// 변수를 재정의할때 declare 사용
declare let a:number;
console.log(a + 1);
// 일반 js파일에 있던 변수를 사용할 때 에러나지 않도록 재정의 할 때 declare 사용한다.

// tsc-w 로 변환된 js 파일에는 declare코드가 보이지 않는다.

// $().append(); 제이쿼리쓸때도 재정의 해야한다.

// 같은 ts 파일은 var로 선언했을떄 다른ts파일에서도 사용이 가능하다. 아니면 export import 사용해서 쓰자.


// 전역변수로 선언했다면, 변수명이 겹칠 수 있으니, 파일에 export{} 추가하면 로컬모듈이 완성된다.
// 글로벌 변수를 만들고싶다면, declare global{ type Dog = string; } 라고 하면, Dog 타입이 글로벌 변수가 된다.
// 글로벌타입이나 인터페이스 만들고 싶을 때 사용할 수 있다.

