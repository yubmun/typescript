type Age<T> = T;
let a: Age<string>;

type Age2<T> = T extends string ? string : unknown;
// T 가 string인지 확인해주는 extends, 조건식에 자주 들어간다.

let a2:Age2<number>; // unknown

// 중간 퀴즈
// 파라미터로 array가 들어오면 array의 첫 index 자료형을 남김 , array로 안들어오면 any 타입 남김

type hw1<T> = T extends any[] ? T[0] : any;
type Check = hw1<string[]>;
// 이게 최종 이었음, any 나와버리는 꼬라지..

/**
 * 숙제1
 * (숙제1) 타입 파라미터로 

1. array 타입을 입력하면

2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고 

3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?
(동작예시)

let age1 :Age<[string, number]>;
let age2 :Age<[boolean, number]>; 
이러면 age1의 타입은 string, age2의 타입은 unknown이 되어야합니다. (array나 tuple이나 그게 그거임)

이걸 만족하는 type Age를 만들어봅시다.
 */
type Age1<T> = T extends [string, any] ? string : unknown;

let age4 :Age1<[string, number]>;
let age5 :Age1<[boolean, number]>;

/**
 * 숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오. 

타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
아무튼 함수의 파라미터타입이 남아야합니다.
 */

type Machine<T> = T extends (x: infer R) => void ? R : unknown;

type hw11 = Machine<(x: number) => void>;
type hw12 = Machine<(x: string) => void>;







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