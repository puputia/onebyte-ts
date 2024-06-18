/**
 * 인터페이스
 * 유니온(합집합)이나 인터섹션(교집합) 안된다.
 */



interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a:number, b:number): void;
}



const person: Person = {
  name: "이정환",
  sayHi: function() {
    console.log("Hi");
  }
}
person.sayHi();
person.sayHi(1, 2);