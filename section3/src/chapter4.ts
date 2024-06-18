/**
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 */

/**
 * 1. 합집합 - Union 타입 
 * 기호: |
 */

let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];
// 하단에 쓸거라 주석처리
// type Dog = {
//   name: string;
//   color: string;
// };

// type Person = {
//   name: string;
//   language: string;
// };

type Union1 = Dog | Person

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
}

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

// let union4 : Union = {
//   name:"",
// }
/**union4같은 경우 name프로퍼티만 있는데 이는 
Dog과 Person프로퍼티에 포함될 수 없기 때문에 에러가 나는 것이다.  -> 합집합 밖에 존재
유니온은 집합처럼 생각하자 
한쪽 타입에 포함되는 객체거나 다른 한쪽에 포함되는 객체, 둘다 포함되는 교집합에 위치하는 객체만 유니온 타입에 포함됨.   */

/**
 * 2. 교집합 타입 - Intersection 타입 
 * 기호: &
 */

let variable: number & string;

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Intersection = Dog & Person;

let intersection1 : Intersection = {
  name: "",
  color: "",
  language: "",
}
