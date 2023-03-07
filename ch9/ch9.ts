// 타스에서 document.ElementById 쓰는방법
let 제목 = document.querySelector("#title");
// 제목.innerHTML = "반가워요"; 에러가 난다 제목이 타입이 Element | null 로 나옴 narrowing 해줘야 됨

// 아래는 narrowing 하는 방법들

if(제목 !== null){
  제목.innerHTML = "반가워요";
}

// 왼쪽에 있는 제목이라는애가 Element의 인스턴스냐? 라는 의미, 가장 많이 쓰인다.
if(제목 instanceof Element){
  제목.innerHTML = "반가워요";
}

// let 제목 = document.querySelector("#title") as Element; 써주면 null이어도 무조건 Element로 처리됨
// as Element는 최후의 수단으로 쓰자

// 옵셔널 체이닝 ? 써서 쓸 수 있음, 제목에 innerHTML이 있으면 출력해주고, 없으면 undefined를 뱉으라는 의미이다.
if(제목?.innerHTML){
  제목.innerHTML = "반가워요";
}

// tsconfig.json 에서 null 체크 없애면 그냥 쓸 수 있기도 함


// --------------------------------

let 링크 = document.querySelector(".link");
// href 속성은 HTMLAnchorElement로 써줘야 narrowing 가능함
if(링크 instanceof HTMLAnchorElement){
  링크.href = "https://kakao.com";
}

// 버튼이나 헤딩요소도 다 다른 Element에 있으니 각각 맞는 Element를 찾아서 narrowing 시켜야 된다

let 버튼 = document.querySelector("#button");
// ? 는 옵셔널 체이닝으로 narrowing 처럼 쓸 수 있음
// 버튼 에 addEventListener 달수있으면 달고, 안되면 undefined 뱉어주세요. 라는 의미
버튼?.addEventListener("click", function(){

})

// 숙제 1 html 안에 있는 test.jpg를 보여주고 있는 이미지 태그가 있다고 가정하고, new.jpg 파일로 바꾸고 싶다면?
let image = document.querySelector("#image");
if(image instanceof HTMLImageElement){
  image.src = "new.jpg"
}

// 숙제 2 세개의 a 태그, href 속성을 전부 https://kakao.com 으로 바꾸고싶다면?
let threeA = document.querySelectorAll(".naver");

threeA.forEach((x) => {
  if(x instanceof HTMLAnchorElement){
    x.href = "https://kakao.com"
  }
})


// 숙제1
let 이미지 = document.querySelector("#image");
if (이미지 instanceof HTMLImageElement){
  이미지.src = "new.jpg";
}

// 숙제2
let 숙제2 = document.querySelectorAll(".naver");
숙제2.forEach((x) => {
  if(x instanceof HTMLAnchorElement){
    x.href = "https://kakao.com";
  }
})