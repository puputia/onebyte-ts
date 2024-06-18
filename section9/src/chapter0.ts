/**
 * 조건부 타입 : 삼항연산자를 이용하여 조건에 따라 타입을 결정함.
 */

import { isUndefined } from "util";

type A = number extends string ? string : number;

type ObjA = { // 슈퍼타입
  a: number;
};

type ObjB = { // 서브타입
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>
let varB: StringNumberSwitch<string>

function removeSpaces<T>(text: T) : T extends string ? string : undefined;
function removeSpaces(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") ;
  } else {
    return undefined;
  }

}

let result = removeSpaces("hi im winterlood");
result.toUpperCase();

let result2 = removeSpaces(undefined);
