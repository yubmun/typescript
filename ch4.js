function 함수1(x) {
    return x * 2;
}
// 함수1('kim'); 에러를 뱉어준다
// 함수1(); 파라미터 안 넣으면 에러 뱉음
function 함수2(x) {
    x + 2;
}
// void는 return이 없는 함수에 써준다.
function 함수3(x) {
    // return x + 2; // Union 타입이니깐 연산을 못해준다.
    if (typeof x === "number") {
        console.log(x + 2);
    }
}
// ? 는 undefined랑 똑같음 == undefined|number 라는 의미
// 숙제1 이름을 파라미터로 입력하면 콘솔창에 안녕하세요 이름 출력
function 함수4(x) {
    if (typeof x === "string") {
        return console.log("\uC548\uB155\uD558\uC138\uC694 ".concat(x));
    }
    return console.log("이름이 없습니다.");
}
// 숙제2
function 함수5(x) {
    if (typeof x === "string" || typeof x === "number") {
        return console.log(x.toString().length);
    }
    return console.log("뭐든 함수에 입력하세요");
}
// 함수5(1111);
// 함수5("12341234");
// 함수5();
// 숙제3
function 함수6(income, haveHouse, score) {
    var result = 0;
    result += income;
    if (haveHouse) {
        result += 500;
    }
    if (score === "상") {
        result += 100;
    }
    if (result >= 600) {
        return "결혼가능";
    }
}
console.log(함수6(700, false, "중"));
console.log(함수6(100, false, "상"));
console.log(함수6(100, true, "상"));
