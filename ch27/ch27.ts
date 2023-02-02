type Age<T> = T;
let a: Age<string>;

type Age2<T> = T extends string ? string : unknown;
// T 가 string인지 확인해주는 extends, 조건식에 자주 들어간다.

let a2:Age2<number>; // unknown

type FirstItem<T> = T extends any[] ? T[0] : any;
let age1:FirstItem<string[]>
let age2:FirstItem<number>

/**
 * infer 키워드
 * 조건문에서 쓸 수 있는 키워드
 * infer는 타입을 뽑는 역할을 하는 키워드
 * 
 */
type Person<T> = T extends infer R ? R : unknown;
// R 은 T 에 입력하는 타입이 된다.

type 타입추출<T> = T extends (infer R) ? R : unknown;

type 타입추출2<T> = T extends ( ()=> infer R) ? R : unknown;
type a = 타입추출2<()=> void>

// 평상시에는 ReturnType<()=> void>를 쓴다고 한다.

//숙제1
type Hw1<T> = T extends any[] ? (T[0] extends string ? string : unknown) : unknown;
let hw1: Hw1<[string, number]>;
let hw1_1: Hw1<[boolean, number]>;

/**
 * 해답
 * type Hw1<T> = T extends [string, ...any] ? T[0] : unknown
 */

// 숙제2
type Hw2<T> = T extends ( (x:infer R) => any ) ? R : any;