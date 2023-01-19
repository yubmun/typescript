// ts 쓰면 객체지향 언어와 같은 문법을 제공함 public private protected static 같은 키워드 사용 가능

class Yubmun {
  // field값이 있어야 constructor에 쓸 수 있음, constructor는 파라미터로 입력할 수 있는게 차이

  // public 은 모든 자식들이 사용 가능, 생략해도 부여가 됨
  public name;

  // private 는 수정 불가능한 필드값이다.
  private age = 20;
  // #age = 20; ECMA 2015 이상부터는 private을 #으로 쓸 수 있음
  
  private familyName = "Lee";

  constructor(name: string){
    this.name = name + this.familyName;
  }
  public 함수(){

  }
}

let 준엽이 = new Yubmun("준엽");
// private는 class 밖에서 수정이 안됨, 단, class안에 private로 선언된 필드를 변경할 수 있는 함수가 있으면 변경 가능하긴 함

class Person_1{
  constructor(public name:string){
    // 생성자의 파라미터 앞에 public 키워드 붙이면 필드값으로 미리 선언 안해도 됨, 축약가능
    this.name = name;
  }
}
let 자식 = new Person_1("사람")
console.log(자식);