declare let obj: {
    name: string;
    age: number;
};
interface Person {
    age: number;
    name: string;
}
type PersonKeys = keyof Person;
declare let a: PersonKeys;
type Car = {
    color: boolean;
    model: boolean;
    price: boolean | number;
};
type TypeChanger<MyType> = {
    [key in keyof MyType]: string;
};
type NewCar = TypeChanger<Car>;
type Bus = {
    color: string;
    model: boolean;
    price: number;
};
type Hw1<Hw1Type> = {
    [key in keyof Hw1Type]: string | number;
};
type NewBus = Hw1<Bus>;
type Hw2<Hw2Type, T> = {
    [key in keyof Hw2Type]: T;
};
type Bike = {
    color: string;
    model: boolean;
    price: number;
};
type NewBike = Hw2<Bike, boolean | string | number>;
declare let obj4: NewBike;
