// void
// void -> 공허 -> 아무것도 없다.
// void -> 아무것도 없음을 의미하는 타입

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}


// undefined와 null이 허용되는 경우 
function func3(): undefined {
  console.log("hello");
  return;
  // return undefined
}
function func4(): null {
  console.log("hello");
  return null;

}

// never
// never -> 존재하지 않는

function func5(): never {
  while (true) {

  }
}

// 에러를 던저줌
// 실행되면 바로 프로그램 중지 -> never써야함. 
function func6(): never {
  throw new Error();
}

let anyVar: any;
let a: never;
// never는 어떤값도 담을 수 없다.
// a = 1;
// a = {};
// a = undefined;
// a = null;
// a = anyVar;