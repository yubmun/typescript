var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var 멍멍 = ["dog", true];
// tuple 타입을 사용하면, 위치까지 고려하여 타입을 지정할 수 있음
var 멍멍2 = ["dog", true];
// ?를 붙이면 들어와도 되고, 안들어와도 된다는 의미 옵션. 맨 뒤에만 있어야되며, 두개가 있어도 되지만, 맨뒤부터 ?가들어가야된다.
var 멍멍3 = ["dog"];
// 파라미터에도 tuple타입을 사용할 수 있다.
function 함수() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
// 함수(1,2,3,4,5,6);
function 함수2(a, b) {
    console.log([a, b]);
}
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
//숙제1
var 숙제1 = ["동서녹차", 4000, true];
//숙제2
var 숙제2 = ["동서녹차", 4000, true, false, true, true, false, true];
//숙제3
function 숙제3() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
}
//숙제4
function 숙제4() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    //narrowing 을 해야되는데
    var stringResult = [];
    var numberResult = [];
    var result = [];
    for (var _a = 0, rest_1 = rest; _a < rest_1.length; _a++) {
        var i = rest_1[_a];
        if (typeof i === "number") {
            numberResult.push(i);
        }
        else {
            stringResult.push(i);
        }
    }
    result.push(stringResult);
    result.push(numberResult);
    return result;
}
console.log(숙제4('b', 5, 6, 8, 'a'));
