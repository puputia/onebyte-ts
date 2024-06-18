/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기 
// 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기 
function func(a: number, b: number): number {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */

// 매개변수 name에 기본값 설정. 매개변수의 타입을 직접 정의하지 않아도 기본값을 토대로 타입을 추론해줌. 
/**선택적 매개변수 사용할 때 주의할 점
선택적 매개변수는 필수 매개변수들 앞에 오면 안된다.
선택적 매개변수를 넣으려면 필수 매개변수 앞에 와야함. */
function introduce(name = "이정환", age: number, tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") {
    console.log(`tall: ${tall + 10}`);
  }

}
introduce("이정환", 175);

introduce("이정환", 27);

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it)=>(sum += it));
  return sum;
}

getSum(1,2,3) //6
getSum(1,2,3,4,5,)//15