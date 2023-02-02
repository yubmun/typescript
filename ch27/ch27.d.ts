type Age<T> = T;
declare let a: Age<string>;
type Age2<T> = T extends string ? string : unknown;
declare let a2: Age2<number>;
type FirstItem<T> = T extends any[] ? T[0] : any;
declare let age1: FirstItem<string[]>;
declare let age2: FirstItem<number>;
/**
 * infer 키워드
 * 조건문에서 쓸 수 있는 키워드
 * infer는 타입을 뽑는 역할을 하는 키워드
 *
 */
type Person<T> = T extends infer R ? R : unknown;
type 타입추출<T> = T extends (infer R) ? R : unknown;
type 타입추출2<T> = T extends (() => infer R) ? R : unknown;
type a = 타입추출2<() => void>;
type Hw1<T> = T extends any[] ? (T[0] extends string ? string : unknown) : unknown;
declare let hw1: Hw1<[string, number]>;
declare let hw1_1: Hw1<[boolean, number]>;
/**
 * 해답
 * type Hw1<T> = T extends [string, ...any] ? T[0] : unknown
 */
type Hw2<T> = T extends ((x: infer R) => any) ? R : any;
