/**
 * interface는 object 타입을 지정할 때 사용한다.
 * 또한 class 타입을 확인할 때도 사용한다.
 * 대신, implements 키워드도 함께 추가해야 한다.
 */
interface CarType {
    model: string;
    price: number;
}
declare class Car implements CarType {
    model: string;
    price: number;
    constructor(a: string);
}
declare let 붕붕이: Car;
