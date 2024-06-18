/**
 * 제네릭
 */

// 제네릭 함수 
/** 타입변수와 함께 여러타입의 값을 인수로 받아서 범용적으로 쓸 수 있는 함수 
 * 제네릭 함수들은 타입 변수를 꺽쇄와 함께 함수 이름 뒤에 선언 <T>
 * 이 타입 변수에 할당되는 타입은 함수를 호출할 떄 인수에 따라서 결정된다. 
*/
function func<T>(value: T):T {
  return value;
}

let num = func(10);
// num.toUpperCase();
if(typeof num === "number") {
  num.toFixed();
}


let bool = func(true);

let str = func("string");

// 타입변수 <T>를 튜플 타입으로 추론하게 하기
//1. 타입단언 방식
// let arr = func([1, 2, 3] as [number,number,number]);

//2. <>사용 
/**  함수를 호출할 때 함수의 이름 뒤에 꺽쇠를 열고 이 꺽쇠안에 
타입 변수 T에 할당하고 싶은 타입을 써주면 된다.
[]에 적혀있는 타입이 호출할 때 위 타입변수 <T>에 할당이 된다. 
// 튜플 타입이 할당되기 때문에 결론적으로 튜플 타입을 반환하게 된다.
 * 
 * */
let arr = func<[number, number, number]>([1,2,3]);
