/**
 * interface는 object 타입을 지정할 때 사용한다.
 * 또한 class 타입을 확인할 때도 사용한다.
 * 대신, implements 키워드도 함께 추가해야 한다.
 */

interface CarType{
  model: string;
  price: number;
}
// 이렇게 사용하면 해당 class 이름 우측에 implements를 쓰고 interface이름을 쓰면 해당 class가 이 interface에 있는 속성을 모두 돌고 있는지에 대해 확인이 가능하다.
// 확인만 하는 것이며, 타입을 지정하는 것은 아니기 때문에, Car class에 타입을 지정하지 않아도 에러는 나지 않는다.
class Car implements CarType {
  model: string;
  price: number = 1000;
  constructor(a:string){
    this.model = a;
  }
}
let 붕붕이 = new Car('spark');
