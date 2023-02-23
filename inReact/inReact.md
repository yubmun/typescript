# React에서의 타입스크립트

```
npx create-react-app 프로젝트명 --template typescript
```
터미널 창에 입력하면 tsx 파일이 동반된 템플릿으로 리액트 프로젝트가 생성된다.

Object 형태의 타입을 지정할 때엔
interface나 type 키워드를 사용하여 지정하는 것이 일반적이다.

```ts
type Person = {
  name: string,
  age: number;
};

let person: Person = {
  name: "준엽"
  age: 30;
}
```

<hr>
컴포넌트를 만들 때 es7 react redux 확장프로그램이 있다면, 그 외에 다른 snippets 확장프로그램이 있다면, rafce로 입력하면 자동완성으로 

```ts
const 컴포넌트이름 = () => {
  return (
    <div>
      
    </div>
  )
}
export default 컴포넌트이름
```

형식이 만들어진다.

