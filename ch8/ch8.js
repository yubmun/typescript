function 함수() {
}
// 함수 type alias는 함수 표현식만 쓸 수 있음
let 함수1 = function () {
    return 1;
};
let 회원정보 = {
    name: "kim",
    plusOne(a) {
        return a + 1;
    },
    // plusOne 함수에 파라미터도 number type , return값도 number 타입을 표시함
    changeName: () => { } //이렇게도 쓸 수 있다.
};
회원정보.plusOne(1);
let 회원정보1 = {
    name: "kim",
    age: 30,
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log("안녕");
    }
};
let cutZero = (a) => {
    if (a[0] === "0") {
        return a.replace(/^0+/, "");
    }
    return a;
};
console.log(cutZero("0912"));
let removeDash = (a) => {
    if (a.includes("-")) {
        return parseFloat(a.split("-").join(""));
    }
    return parseFloat(a);
};
console.log(removeDash("941103-1313132"));
let 만들함수 = (a, b = cutZero, c = removeDash) => {
    let result = b(a);
    console.log(c(result));
    return c(result);
};
console.log(만들함수("010-1111-2222", cutZero, removeDash));
