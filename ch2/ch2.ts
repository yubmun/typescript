let 이름1:string = "kim"; //변수에다가 쉴드를 씌운다~
let 나이:number = 30; // 변수에다가 number라는 쉴드를 씌운다~
let 결혼했니:boolean = false; // 변수에다가 boolean 쉴드를 씌운다~
let 결혼했니1:null = null;
let 결혼했니2:undefined = undefined; //null 과 undefined도 타입이다

let 회원들:string[] = ["kim", "park"]; // 배열에도 타입을 설정할 수 있다. 문자만 들어갈 수 있는 배열이다.
let numberArr:number[] = [123, 1234]; // 숫자 타입의 배열

let 회원들2:{member1: string, member2: string} = {member1: "kim", member2: "lee"};
// 온갖 곳에 다 타입 지정해놓을 필요가 없다.

let 회원아저씨 = "park"; // 타스는 알아서 타입 지정해준다. :string 안써줘도 쉴드 씌워줌

// 숙제1
let 나의이름:string = "이준엽";
let 나의나이:number = 30;
let 나의출생지역:string = "대전";

// 숙제2
let 내정보:{songTitle: string, singer: string} = {songTitle : "ditto", singer: "new jeans"};

// 숙제3
let project:{member: string[], days: number, started: boolean} = {
  member : ["kim", "park"],
  days : 30,
  started: true,
}

/**
 * 타입스크립트에선 타입지정을 웬만하면 해준다.
 */