// 파라미터로 spread 문법이 들어온다 ...rest parameter 라고 부른다
// 이렇게 쓰면 파라미터가 100만개가 되어도 가능.
/**
 * 파라미터가 몇개나 들어올지 모를때, rest parameter를 사용한다.
 * function 함수 (...a){ // 다른 파라미터가 있으면, 가장 마지막에 ...a 를 써줘야 된다.
 *
 * }
 *
 * 이렇게 rest parameter로 들어오는 데이터는 전부 배열에 담아준다.
 * 때문에,
 * function 함수 (...a){
 *   console.log(a);
 * }
 *
 * 함수(1,5,3,5,6,6); 실행하면
 * [1,5,3,5,6,6]이 콘솔에 찍힌다.
 *
 * rest parameter 타입지정은 어떻게?
 * function 함수(...a: number[]){ // rest parameter는 데이터가 배열로 들어오니깐, 배열 타입지정하듯이 해줘야 한다.
 *
 * }
 */
function 함수() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    console.log(a);
}
함수(1, 5, 3, 5, 6, 6);
/**
 * spread operator 문법
 * let arr = [1,2,3];
 * let arr2 = [4,5];
 * let arr3 = [...arr, ...arr2]; => [1,2,3,4,5]
 *
 * destructuring 개념설명
 * ["안녕", 100] 을 변수로 빼고 싶다
 * let 변수1, 변수2 = ["안녕", 100]
 *
 * {student: true, age: 20}
 * let {student, age} = {student: true, age: 20} 이것도 되지만
 * let {student : student, age : age} = {student: true, age: 20} 원래는 이렇게 써야됨
 *
 */
var 오브젝투 = { student: true, age: 20 };
function 함쉬(_a) {
    var student = _a.student, age = _a.age;
    console.log(student, age);
}
함쉬(오브젝투);
// 숙제 1
function 숙제1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (i) {
        if (result < i) {
            result = i;
        }
    });
    return result;
}
console.log(숙제1(10, 1, 3, 19));
// 숙제 2
function hw2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user);
    console.log(comment);
    console.log(admin);
}
hw2({ user: "kim", comment: [3, 5, 4], admin: false });
// 숙제 3
function hw3(a) {
    a.forEach(function (i) {
        console.log(i);
    });
}
hw3([40, "wine", false]);
