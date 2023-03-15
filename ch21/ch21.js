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
/**
 * (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.

오늘 배운 tuple 타입으로 타입지정합시다.

쉬워서 답은 생략합니다.

(예시) [ '동서녹차', 4000, true ] 이런 자료 만들고 타입지정하라는 소리입니다.
 */
var hw1 = ["동서녹차", 4000, true];
/**
 * 숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

let arr = ['동서녹차', 4000, true, false, true, true, false, true]
몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다.

tuple 타입과 spread 연산자를 써보도록 합시다.
 */
var hw2 = ['동서녹차', 4000, true, false, true, true, false, true];
/**
 * 숙제3) 함수에 타입지정을 해보도록 합시다.

function 함수(){
  
}
1. 이 함수의 첫째 파라미터는 문자,

2. 둘째 파라미터는 boolean,

3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.

그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요?

오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.
 */
function hw3() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    console.log(x);
}
/**
 * (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.

문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.

함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.

(동작예시)

함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.
 */
function hw4() {
    var x = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        x[_i] = arguments[_i];
    }
    var strArr = [];
    var numArr = [];
    x.forEach(function (x) {
        if (typeof x === "string") {
            strArr.push(x);
        }
        else if (typeof x === "number") {
            numArr.push(x);
        }
    });
    return [strArr, numArr];
}
console.log("이게 결과");
hw4('b', 5, 6, 8, 'a');
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
