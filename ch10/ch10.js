// class 에 대해서 알아보자
var nunu = {
    q: "consume",
    w: "snowball"
};
var garen = {
    q: "strike",
    w: "courage"
};
// 이런식으로 100개를 언제 만드나, 클래스를 만들어서 객체를 쉽게 만들 수 있다
// 이건 옛날 문법
function champion() {
    this.q = "consume";
    this.w = "snowball";
}
// this는 champion으로부터 생성되는 object
// const nunu1 = new champion(); 타스에선 이게 에러로 뜨네
// 요즘 문법
// class Champion{
//   constructor(구멍, 구멍2){
//     this.q = 구멍;
//     this.w = 구멍2;
//   }
// }
/**
 * prototype
 * 원형,
 * 유전자라고 이해하면 쉽다
 * champion.prototype.name = "kim"
 * 자식들은 전부다 name 프로퍼티를 쓸 수 있다. nunu.name = "kim" 이 성립된다.
 * nunu.name 을 찾아볼때 nunu 본인먼저 찾고, 부모 찾고, 부모부모 찾고 이런식으로 부모 유전자를 탐색한다.
 */ 
