function 함수(x) {
    return x[0];
}
var a = 함수([4, 2]); // 타입이 unknown
// console.log(a);// 4 출력
// Generic 함수는 파라미터로 타입을 입력하는 함수
function 함수2(x) {
    return x[0];
}
var b = 함수2([4, 2]);
var c = 함수2(['4', '2']); // 확장성이 좋다.
// 파라미터 제한두기 extends 자료형 작성하면, MyType이 extends뒤에 있는 자료형과 일치한지 체크한다.
function 함수3(x) {
    return x - 1;
}
var d = 함수3(100);
function 함수4(x) {
    return x.length;
}
var e = 함수4(['100']);
function 숙제1(x) {
    return x.length;
}
console.log(숙제1("hello"));
console.log(숙제1(["kim", "park"]));
var data = '{"name" : "dog", "age": 1}';
function 숙제2(x) {
    return JSON.parse(x);
}
console.log(숙제2(data));
// 숙제3
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var 준엽 = new Person('어쩌구');
var 이엽 = new Person(["어쩌구", "저쩌구"]);
