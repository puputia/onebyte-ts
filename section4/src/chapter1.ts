/**
 * 함수 타입 표현식
 */

type Operation = (a: number, b: number) => number;
const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const multifly: Operation = (a, b) => a * b;
const divide: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐
 * (콜 시그니쳐)
 */

type Operation2 = {
  (a: number, b: number): number;
  name: string;
};

function func(a: number): void { }

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const multifly2: Operation2 = (a, b) => a * b;
const divide2: Operation2 = (a, b) => a / b;
// 응용방법
// add2();
// add.name