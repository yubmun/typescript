interface StringOnly {
    [key: string]: string;
    age: "20";
}
declare let user: StringOnly;
declare let css: MyType2;
interface MyType {
    "font-size": {
        "font-size": {
            "font-size": number;
        };
    };
}
interface MyType2 {
    "font-size": MyType2 | number;
}
interface Hw1 {
    [key: string]: string | number;
}
declare let obj: Hw1;
interface Hw2 {
    "font-size": number;
    [key: string]: Hw2 | number;
}
declare let obj2: Hw2;
