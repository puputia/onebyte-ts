/**
 * 기본 타입간의 호환성: number타입이 number 리터럴
 타입보다 큰 집합이기에 업캐스팅이 되므로 num1=num2가 가능. 그 반대는 안됨. 
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성 
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮은가? 
 */

// Animal타입은 Dog타입의 슈퍼 타입
// Dog 타입은 Animal 타입의 서브타임 
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};
let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal; 다운 캐스팅이 되어 오류남.

// 가독성 위해 아래에도 쓸거라 주석처리함.
// type Book = {
//   name: string;
//   price: number;
// };

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book; 다운캐스팅

/**
 * 초과 프로퍼티 검사
 : 실제 타입에는 정의해놓지 않은 프로퍼티를 작성하면 안되도록 막는 검사
 */

type Book = {
  name: string;
  price: number;
};


let book2 : Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
}

// 객체 리터럴을 사용하지 않아 허용
let book3: Book = programmingBook;

function func(book: Book) {}
  func({
    name: "한 입 크기로 잘라먹는 리액트",
    price: 33000,
    // skill: "reactjs"
  });

  // 함수도 마찬가지로 객체 리터럴로 추가 프로퍼티 전달 불가
  //서브타입 객체를 넣으려면 변수에 저장해 두었다가 인수를 변수로 전달해야한다.

  func(programmingBook);

