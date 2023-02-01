export type Age = number;
export interface Person {
  name: string,
  age: number
}
// 만들었다고해서 자동으로 글로벌모듈이 되지는 않는다.

// common 폴더내에 있고, tsconfig.json에 typeRoots로 경로, 파일지정을 한 뒤 common 폴더에 놓으면 글로벌로 사용할 수 있게된다. @types폴더에 있는거는 찾아서 못쓰게 된다는 것도 알아두어야 한다.
