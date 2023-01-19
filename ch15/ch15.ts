// never 타입에 대하여

function 함수() :never{
  // return 쓰면 안됨, 함수실행이 끝나지 않아야 함
  // 에러를 발생시키면 함수가 끝나는게 아니고 함수를 중단시키는거임
  throw new Error()

  // 무한 반복문일때도 끝나지 않는 함수
  while(true){

  }

  // never 타입은 쓸데가 없음, 대부분 void로 쓰니깐, never타입은 코드가 이상할 때 등장한다.
  // never는 있을 수 없는 일이라는 의미
}

let 준엽 = function(){
  throw new Error();
}

// never 타입이 나오면 내 코드가 이상하다고 의심하자.