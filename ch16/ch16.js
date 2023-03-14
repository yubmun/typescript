// ts 쓰면 객체지향 언어와 같은 문법을 제공함 public private protected static 같은 키워드 사용 가능
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Yubmun = /** @class */ (function () {
    function Yubmun(name) {
        // private 는 수정 불가능한 필드값이다.
        this.age = 20;
        // #age = 20; ECMA 2015 이상부터는 private을 #으로 쓸 수 있음
        this.familyName = "Lee";
        this.name = name + this.familyName;
    }
    Yubmun.prototype.함수 = function () {
    };
    return Yubmun;
}());
var 준엽이 = new Yubmun("준엽");
// private는 class 밖에서 수정이 안됨, 단, class안에 private로 선언된 필드를 변경할 수 있는 함수가 있으면 변경 가능하긴 함
var Person_1 = /** @class */ (function () {
    function Person_1(name) {
        this.name = name;
        // 생성자의 파라미터 앞에 public 키워드 붙이면 필드값으로 미리 선언 안해도 됨, 축약가능
        // this.name = name; 도 생략할 수 있다.
    }
    return Person_1;
}());
var 자식 = new Person_1("사람");
console.log(자식);
var Junyub = /** @class */ (function () {
    function Junyub(name, age) {
        this.name = name;
        this.age = age;
    }
    return Junyub;
}());
var Lee = /** @class */ (function (_super) {
    __extends(Lee, _super);
    function Lee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lee.prototype.func = function () {
        return this.name = "준엽";
    };
    return Lee;
}(Junyub));
var few = new Lee("이", 30);
console.log(few.func());
