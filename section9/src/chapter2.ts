/**
 * infer
 * inference -> 추론하다
*/

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;
// infer 다음에오는 R의 타입을 추론할 수 없는 경우에는 조건식이 거짓이 된다.
// 따라서 type C는 never

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야 한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야 한다. 

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
//string