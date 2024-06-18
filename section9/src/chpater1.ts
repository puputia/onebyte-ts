/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// StringNumberSwitch<number> |             -> string
// StringNumberSwitch<string>               -> number        

let d: StringNumberSwitch<boolean | number | string>;
// 1 단계
// StringNumberSwitch<boolean> |
// StringNumberSwitch<number> |
// StringNumberSwitch<string>

// 2단계
// number |
// string |
// number

// 결과
// number | string 

/**
 * 실용적인 예제
 */

type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1 단계
// Exclude<number, string> |
// Exclude<string, string> |
// Exclude<boolean, string>

// 2 단계
// number |
// never |
// boolean

// 결과
// number | never | boolean -> never는 공집합이여서 사라짐 
// number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>; 
// 1 단계
// Extract<number, string> |
// Extract<string, string> |
// Extract<boolean, string>

// 2 단계
// never |
// string |
// never

// 최종 결과
// string

/**
 * 분산적이 조건부 타입이 되지 않도록 
 * 막고 싶다면.. 
 * extends의 양옆에 대괄호 씌워주기 
type StringNumberSwitch<T> = [T] extends [number] ? string : number; */
// 대괄호를 씌어주면 A | B | C 유니온 타입을 전달해도 분산이 안됨. 
// let d: StringNumberSwitch<boolean | number | string>;  거짓이 되서  결과는 number 


