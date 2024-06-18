/**
 * 타입 단언
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나 
 * A가 B의 서브타입이어야 함 
 */

let num1 = 10 as never;
let num2 = 10 as unknown as string;

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

// cat.name="" 객체 const 단언으로 인하여 readonly가 되었기에 객체 프로퍼티 재할당 불가능해서 오류남

/**
 * Non Null 단언
 */

type Post = {
  title : string;
  author?: string;

};

let post : Post = {
  title : "게시글1",
  author: "이정환"
}
// author의 이름의 길이가 몇개인지 출력하는 기능 
// ?(옵셔널 체이닝) :프로퍼티의 값이 null이나 undefined 될 수 있음 
//  .length 점표기법 접근하면 undefined값은 number타입에 할당할 수 없어서  오류가 발생  
// 옵셔널 체이닝을 사용하면 원하는 동작을 할 수 없음.
// Non Null 단언을 사용 하면됨. ! 
const len: number = post.author!.length;