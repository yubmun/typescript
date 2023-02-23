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
/**
 * 이름을 파라미터로 입력하면 콘솔창에 안녕하세요 홍길동 을 출력해주고 아무것도 입력하지 않으면 이름이 없습니다.
 */
function 숙제1(x) {
    if (typeof x === "string") {
        console.log("안녕하세요" + x);
    }
    else {
        console.log("이름이 없습니다");
    }
}
console.log(숙제1("이준엽"));
console.log(숙제1());
/**
 * 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어주는 함수를 만들자
 */
function 숙제2(x) {
    if (typeof x === "string") {
        return x.length;
    }
    if (typeof x === "number") {
        var result = x.toString();
        return result.length;
    }
}
console.log(숙제2('245'));
console.log(숙제2(9568));
/**
 * 함수의 파라미터로 월소득, 집보유여부, 매력점수 를 입력
 * 월소득은 1만원당 1점, 집보유시 500점, 미보유 0점, 매력점수는 상일때만 100점으로 계산
 * 총 점수가 600점 이상일 때 결혼가능을 return 그 외엔 아무것도 return 하지 않음
 */
function 숙제3(x, y, z) {
    var result = 0;
    result += x;
    if (y) {
        result += 500;
    }
    if (z === "상") {
        result += 100;
    }
    if (result > 600) {
        return "결혼가능";
    }
}
console.log(숙제3(700, false, "중"));
console.log(숙제3(100, false, "상"));
console.log(숙제3(300, true, "상"));
