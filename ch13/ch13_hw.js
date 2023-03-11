/**
 * (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.

최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.

(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.

(조건2) Math.max() 사용금지 반복문이나 쓰셈
 */
function hw_1() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var result = 0;
    a.forEach(function (x) {
        if (x > result) {
            result = x;
        }
    });
    return result;
}
console.log(hw_1(2, 5, 8, 3));
/**
 * (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.

함수( { user : 'kim', comment : [3,5,4], admin : false } )
어떻게 코드를 짜야할까요?

(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
 */
function hw_2(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
console.log(hw_2({ user: 'kim', comment: [3, 5, 4], admin: false }));
/**
 * (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.

함수( [40, 'wine', false] )
어떻게 코드를 짜야할까요?

(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.

(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
 */
function hw_3(a) {
    console.log.apply(console, a);
}
console.log(hw_3([40, 'wine', false]));
