// 문자 혹은 숫자가 들어올 수 있는 변수는? or연산자로 써서 쓰는걸 Union 타입이라고 한다.
var 둘다 = "kim";
var 셋다 = true; // () 써주는건 자유
둘다 = 123;
셋다 = "셋다된다";
var 어레이 = [1, '2', 3]; // number | string[] 이건 1234, ["kim","lee"]이런거임
var 오브젝 = { a: "123" };
var 애니; // 모든 자료형을 허용해준다. 타스를 쓰는 이유가 없어진다. 
애니 = 123;
애니 = true;
var 언노운; // any와 매우 유사한 타입, 용도도 똑같음 이름만 다름. 조금더 안전하다. 왜? 언노운은 number 타입도 아니라서 연산이 안된다. 
// let 변수1:string = 언노운; 이건 안되지만 애니는 할당이 되는게 문제임 애니는 바이러스같은 존재
var age;
//age + 1; 타스는 엄격해서 이거 계산 안됨
// 문제1
var user = "kim";
var age1 = undefined;
var married = false;
var 철수 = [user, age1, married];
// 문제2
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John"
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
