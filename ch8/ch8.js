function 함수() {
}
// 함수 type alias는 함수 표현식만 쓸 수 있음
var 함수1 = function () {
    return 1;
};
var 회원정보 = {
    name: "kim",
    plusOne: function (a) {
        return a + 1;
    },
    // plusOne 함수에 파라미터도 number type , return값도 number 타입을 표시함
    changeName: function () { } //이렇게도 쓸 수 있다.
};
회원정보.plusOne(1);
var 회원정보1 = {
    name: "kim",
    age: 30,
    plusOne: function (x) {
        return x + 1;
    },
    changeName: function () {
        console.log("안녕");
    }
};
var cutZero = function (a) {
    if (a[0] === "0") {
        return a.replace(/^0+/, "");
    }
    return a;
};
console.log(cutZero("0912"));
var removeDash = function (a) {
    if (a.includes("-")) {
        return parseFloat(a.split("-").join(""));
    }
    return parseFloat(a);
};
console.log(removeDash("941103-1313132"));
var 만들함수 = function (a, b, c) {
    if (b === void 0) { b = cutZero; }
    if (c === void 0) { c = removeDash; }
    var result = b(a);
    console.log(c(result));
    return c(result);
};
console.log(만들함수("010-1111-2222", cutZero, removeDash));
