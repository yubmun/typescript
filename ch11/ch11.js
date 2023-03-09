var Person1 = /** @class */ (function () {
    function Person1(a) {
        // 필드 값을 써야 constructor에 추가할 수 있음, js에서는 안써도 가능함
        this.data = 0;
        this.name = a;
    }
    Person1.prototype.함수 = function (a) {
        if (a === void 0) { a = "world"; }
        console.log("hello" + a);
    };
    return Person1;
}());
var 사람1 = new Person1("kim");
var 사람2 = new Person1("park");
// 사람1.data 필드값 따라 0이 나옴
// 사람2.함수("안녕"); 
/**
 * 숙제 1 Car 클래스를 만들어보자
 */
var Cars = /** @class */ (function () {
    function Cars(a, b) {
        this.model = a;
        this.price = b;
    }
    Cars.prototype.tax = function () {
        return this.price / 10;
    };
    return Cars;
}());
var variable = new Cars("소나타", 3000);
/**
 * 숙제2
 */
var Words = /** @class */ (function () {
    function Words() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var strArr = [];
        var numArr = [];
        param.forEach(function (x) {
            if (typeof x === "string") {
                strArr.push(x);
            }
            else if (typeof x === "number") {
                numArr.push(x);
            }
        });
        this.num = numArr;
        this.str = strArr;
    }
    return Words;
}());
var test1 = new Words('kim', 3, 5, "park");
// 숙제 1
var Car = /** @class */ (function () {
    function Car(a, b) {
        this.model = a;
        this.price = b;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
console.log(car1);
console.log(car1.tax());
// 숙제 2
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var 숫자들 = [];
        var 문자들 = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                문자들.push(i);
            }
            else {
                숫자들.push(i);
            }
        });
        this.num = 숫자들;
        this.str = 문자들;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
console.log(obj.num);
console.log(obj.str);
