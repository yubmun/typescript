"use strict";
/**
 * d.ts 파일은 어디에 쓰이는가
 * 타입 정의 모아놓는 파일이다.
 * d.ts에는 export
 *
 * import / export 할게 많으면 namespace를 쓰던지 as * 을 쓰던지 한다.
 *
 * 모든 타입을 정리해놓은 레퍼런스용으로 d.ts파일을 쓰기도 한다.
 * tsconfig.json 파일에 "declaration": true를 입력해놓으면, ts파일마다 d.ts 파일이 자동으로 생성된다.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var age;
var person;
var 이름 = "kim";
/**
 * 제이쿼리 타입 정의는
 * github.com/DefinitelyTyped/DefinitelyTyped
 * d.ts 파일을 찾아서 다운받아서 사용하거나
 *
 * typescriptlang.org/dt/search?search=
 * 타입스크립트 공홈에서 라이브러리명을 입력해주면, 찾아서 사용할 수 있다. npm 설치시에 대부분 타입도 들어온다고 한다.
 */ 
