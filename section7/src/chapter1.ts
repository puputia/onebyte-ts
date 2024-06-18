/**
 * 첫번째 사례
 * a타입과 b타입이 다른 경우 -> 타입변수 2개 쓰기(기존 T만 있었던 곳에 ,를 찍고 U 
 + b의 타입도 변경해주기)
 * 필요한 상황에 타입변수 여러개 선언 가능함.
 */

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);


/**
* 두번째 사례
*/


function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);
// 0

let str = returnFirstValue([1, "hello", "mynameis"]);
// "hello"

// "hello" 

/**
 * 세번째 사례
 */

interface A {
  length: number;
}

interface B extends A {}

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

getLength("123");

getLength([1, 2, 3]);

getLength({ length: 1 });

// getLength(undefined);

// getLength(null);