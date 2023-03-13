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
var User = /** @class */ (function () {
    function User() {
        this.x = 10; // 자식 클래스 NewUser 에서 못 씀
        this.y = 2; // 자식 클래스 NewUser 에서 사용 가능
        this.intro = User.skill + "전문가입니다.";
    }
    User.z = 10; // static 역할은, 부모 class에 직접 부여됨. 자식에게 물려주지 않음
    User.c = 10; // static은 앞에 private public protected를 붙여서 쓸 수 있다.
    User.skill = "js";
    return User;
}());
User.skill = "ts";
// 이 아래로는 User클래스의 skill 필드값이 "ts"로 변경된다.
var 철수 = new User();
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewUser.prototype.doThis = function () {
        this.y = 20;
    };
    return NewUser;
}(User));
/**
 * protected : extends된 class는 사용 가능, 자식들 사용 불가능
 * private : extends된 class는 사용 불가능, 자식들 사용 불가능
*/
/**

(숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.

class User {
  private static x = 10;
  public static y = 20;
}
User.addOne(3) //이렇게 하면 x가 3 더해져야함
User.addOne(4) //이렇게 하면 x가 4 더해져야함
User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함
저렇게 User.addOne() 쓸 때마다 x가 증가하는 함수는 어떻게 만들 수 있을까요?

그리고 x값을 콘솔창에 출력해주는 printX() 함수도 한번 만들어보십시오.

(조건) private static x = 10; 이 코드 수정금지
 */
var User_1 = /** @class */ (function () {
    function User_1() {
    }
    User_1.prototype.addOne = function (a) {
        User_1.x = User_1.x + a;
    };
    User_1.prototype.printX = function () {
        console.log(User_1.x);
    };
    User_1.x = 10;
    User_1.y = 20;
    return User_1;
}());
var junyub = new User_1();
junyub.addOne(4);
junyub.addOne(3);
junyub.printX();
// 숙제 1
var Hw_1 = /** @class */ (function () {
    function Hw_1() {
        this.z = 30;
    }
    Hw_1.x = 10;
    Hw_1.y = 20;
    return Hw_1;
}());
/**
 * private static => 클래스 내에서만 쓸 수 있음. 클래스 내에서만 수정이 가능함
 * public static => 클래스 내에서만 쓰이며, 수정은 Hw_1.y 로 접근하여 수정할 수 있음
 * protected => 부모클래스, 자식클래스는 사용가능, 외부에서는 사용 불가능
 */
// 숙제2
var Hw_2 = /** @class */ (function () {
    function Hw_2() {
    }
    Hw_2.addOne = function (num) {
        return Hw_2.x + num;
    };
    Hw_2.printX = function () {
        console.log(Hw_2.x);
    };
    Hw_2.x = 10;
    Hw_2.y = 20;
    return Hw_2;
}());
// Hw_2.addOne(3); // 이렇게 하면 x가 3 더해져야 함
// Hw_2.addOne(4); // 이렇게 하면 x가 4 더해져야 함
// Hw_2.printX(); // 콘솔창에 x 값이 출력되어야 함
/**
 * 숙제3) 이런거 어떻게 만들게요

웹 요소 애니메이팅하는거 이런 것의 기초 격인데

let 네모 = new Square(30, 30, 'red');
네모.draw()
네모.draw()
네모.draw()
네모.draw()
이렇게 네모.draw()를 할 때마다

index.html에 가로 30px, 세로 30px, 배경색이 'red' 의 <div> 박스가

가로 400px 세로 400px 공간 안에 무작위로 배치되어야합니다.
 */
var Square_1 = /** @class */ (function () {
    function Square_1(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square_1.prototype.draw = function () {
        var square = document.createElement("div");
        square.style.width = "".concat(this.width, "px");
        square.style.height = "".concat(this.height, "px");
        square.style.color = "".concat(this.color);
    };
    return Square_1;
}());
var 네모 = new Square_1(30, 30, 'red');
네모.draw();
//숙제3
var Square = /** @class */ (function () {
    function Square(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Square.prototype.draw = function () {
        var a = Math.random();
        var square = "\n      <div style=\"position:relative;\n      top:".concat(a * 400, "px;\n      left:").concat(a * 400, "px;\n      width:").concat(this.width, "px;\n      height:").concat(this.height, "px;\n      background:").concat(this.color, "></div>");
        document.body.insertAdjacentHTML("beforeend", square);
    };
    return Square;
}());
