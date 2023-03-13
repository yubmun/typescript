class User {
  private x = 10; // 자식 클래스 NewUser 에서 못 씀
  protected y = 2; // 자식 클래스 NewUser 에서 사용 가능
  static z = 10; // static 역할은, 부모 class에 직접 부여됨. 자식에게 물려주지 않음
  private static c = 10;// static은 앞에 private public protected를 붙여서 쓸 수 있다.
  
  static skill = "js";
  intro = User.skill + "전문가입니다.";
}

User.skill = "ts";
// 이 아래로는 User클래스의 skill 필드값이 "ts"로 변경된다.

let 철수 = new User();

class NewUser extends User {
  
  doThis(){
    this.y = 20;
  }
}

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

class User_1 {
  private static x = 10;
  public static y = 20;

  public addOne(a: number){
    User_1.x = User_1.x + a;
  }
  public printX(){
    console.log(User_1.x);
  }
}

let junyub = new User_1();
junyub.addOne(4);
junyub.addOne(3);
junyub.printX();
// 숙제 1
class Hw_1{
  private static x = 10;
  public static y = 20;
  protected z = 30;
}
/**
 * private static => 클래스 내에서만 쓸 수 있음. 클래스 내에서만 수정이 가능함
 * public static => 클래스 내에서만 쓰이며, 수정은 Hw_1.y 로 접근하여 수정할 수 있음
 * protected => 부모클래스, 자식클래스는 사용가능, 외부에서는 사용 불가능
 */

// 숙제2
class Hw_2{
  private static x = 10;
  public static y = 20;

  static addOne(num:number){
    return Hw_2.x + num;
  }
  static printX(){
    console.log(Hw_2.x);
  }
}
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

class Square_1{
  width: number;
  height: number;
  color: string;

  constructor(width: number, height: number, color:string){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw(){
    let square = document.createElement("div");
    square.style.width = `${this.width}px`;
    square.style.height = `${this.height}px`;
    square.style.color = `${this.color}`;
  }
}
let 네모 = new Square_1(30, 30, 'red');
네모.draw();

//숙제3
class Square{
  private width:number;
  private height:number;
  private color:string;

  constructor(width:number, height:number, color:string){
    this.width = width;
    this.height = height;
    this.color = color;
  }
  
  draw(){
    let a = Math.random();
    let square = `
      <div style="position:relative;
      top:${a * 400}px;
      left:${a *400}px;
      width:${this.width}px;
      height:${this.height}px;
      background:${this.color}></div>`;
    document.body.insertAdjacentHTML("beforeend", square);
  }
}