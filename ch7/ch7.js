var 엄격;
// 어떤 문자만 가능하다~ 라는 제한을 둘 수 있음. Literal types이라고 함.
엄격 = 123;
// 엄격 = 456; 이건 에러남
var 접니다;
접니다 = "대머리"; // 혹은 "솔로" 만 됨, 자동완성으로 아주 편리하긴 함
console.log(typeof 접니다); // 접니다 타입은 string으로 나옴
console.log(typeof 엄격); // 엄격 타입은 number로 나옴
// 함수 파라미터 자리에 리터럴 타입으로 써놓으면 좋다 return 값도 제한을 줄 수 있음
function 함수(a, b) {
    return 1;
}
// 문제
function hw_1(a) {
    return [a];
}
var data = {
    name: "kim"
};
function myF(a) {
}
// myF(data.name);
// kim 이라는 자료만 들어올수 있습니다가 아니고, kim 이라는  타입만 들어올 수 있다는 의미, object 타입을 제대로 지정해서 쓰든지, assertion 문법으로 as 키워드 써서 해결하든지, as const 라는 키워드를 써도 됨
/**
 * var data = {
 *  name : "kim"
 * } as const
 *
 * as const ??
 * 1. objecet value 값을 그대로 타입으로 지정해준다.
 * 2. objcet 속성들에 모두 readonly 를 붙여준다.
 *
 * as const 를 쓰면 myF(data.name) 이 에러가 안난다.
 */
// 문제 1. 가위,바위,보라는 문자만 입력할 수 있고, 가위,바위,보 만 들어올 수 있는 array를 return 해야함
function 문제1(x) {
    return [x];
}
// const 변수에도 Literal types 쓰면 여러개 쓸 수 있다.
var 자료 = {
    name: "kim"
};
// as const는 타입 지정을 literal type , object value 값을 그대로 타입으로 지정해주며, object속성들에 모두 readonly를 붙여줌
// 자료.name을 하면 "kim" 이 나오는데,,
function 내함수4(a) {
}
// 내함수3(자료.name);
// 위가 Literal types의 문제점이다. 내함수3에서는 "kim"이라는 타입만 들어올 수 있습니다가 맞고 "kim"이라는 자료만 들어올 수 있습니다가 아니다.
// 해결법은? assertion 써줘도 됨 as 키워드 ㅇㅇ
