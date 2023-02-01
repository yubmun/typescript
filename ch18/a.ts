export var 이름 = "kim";
export var 나이 = 20;

namespace 네임스페이스 {
  export type Name = string | number;
}
// object와 다르게 생겼는데 object처럼 감싸고 있는 것이다.

export type 이름 = string;
export interface 인터페이스{

}

export type Car = {
  wheel: number,
  model: string
}

export interface Bike{
  wheel: 2,
  model: string
}

export type No = (a? :object) => void