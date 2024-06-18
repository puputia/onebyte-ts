/**
 * 함수 타입 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는
 * 1. 반환값의 타입이 호환되는가
 * 2. 매개변수의 타입이 호환되는가
 */

// 기준 1. 반환값이 호환되는가
type A = () => number;
type B = () => 10;

let a: A = () => 10; // number 타입
let b: B = () => 10; // number 리터럴 타입

a = b;
// b = a;  다운캐스팅

// 기준2. 매개변수가 호환되는가
// 2-1. 매개변수의 개수가 같을 때
/**  매개변수의 타입을 기준으로 함수 타입의 호환성을 판단할 때에는 업캐스팅 떄는 안되고,
다운캐스팅일때는 된다.*/
type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => { };
let d: D = (value) => { };

// c=d; 업캐스팅이 오류. 다운캐스팅이 오히려 오류안남.
d=c;

type Animal = {
  name: string;
}
type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal:Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog:Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animalFunc = dogFunc;// 업캐스팅인데 안됨. 오류남
//. dogFunc의 매개변수 타입이 animalFunc 매개변수 타입보다 작은 서브타입이기 때문. 

dogFunc = animalFunc;
let testFunc = (animal:Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};

let testFunc2 = (dog:Dog) => {
  console.log(dog.name);
}
// 허용됨 dog 타입은 Animal 타입의 서브타입이기 때문에 기본적으로 animal타입의 객체들이 갖고있는 모든 프로퍼티를 Dog타입은 다 갖고 있다. 

// 2-2. 매개변수의 개수가 다를 때
// 할당하려고 하는 쪽의 함수의 타입의 매개변수의 개수가 더 적을 때에만 호환이 된다.

type Func1 = (a:number, b:number)=>void;
type Func2 = (a:number) => void;

let func1 : Func1 = (a,b) => {};
let func2 : Func2 = (a) => {};

func1 = func2;
// func2 = func1;