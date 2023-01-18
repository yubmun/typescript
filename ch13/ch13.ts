// 파라미터로 spread 문법이 들어온다 ...rest parameter 라고 부른다
// 이렇게 쓰면 파라미터가 100만개가 되어도 가능.

function 함수(...a: number[]){
  console.log(a);
}
함수(1,5,3,5,6,6);

/**
 * spread operator 문법
 * let arr = [1,2,3];
 * let arr2 = [4,5];
 * let arr3 = [...arr, ...arr2]; => [1,2,3,4,5]
 * 
 * destructuring 개념설명
 * ["안녕", 100] 을 변수로 빼고 싶다
 * let 변수1, 변수2 = ["안녕", 100]
 * 
 * {student: true, age: 20}
 * let {student, age} = {student: true, age: 20} 이것도 되지만
 * let {student : student, age : age} = {student: true, age: 20} 원래는 이렇게 써야됨
 * 
 */

const 오브젝투 = {student: true, age: 20}


function 함쉬({student, age}: {student: boolean, age: number}){
  console.log(student, age);
}

함쉬(오브젝투);

// 숙제 1
function 숙제1(...a:number[]) :number{
  let result = 0;
  a.forEach((i)=>{
    if(result < i){
      result = i;
    }
  })
  return result;
}
console.log(숙제1(10, 1, 3, 19));

// 숙제 2
function hw2({user, comment, admin}:{user:string, comment:number[], admin:boolean}){
  console.log(user);
  console.log(comment);
  console.log(admin);
}
hw2({user: "kim", comment: [3,5,4], admin: false});

// 숙제 3
function hw3(a:(number | string | boolean)[]){
  a.forEach((i) => {
    console.log(i);
  })
}
hw3([40, "wine", false]);