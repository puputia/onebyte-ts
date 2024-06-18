/**
 * Unknown 타입: 모든 타입의 전체집합 
 */

function unknownExam() {
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  /**다운 캐스팅이라 오류.
    let num: number = unknownVar;
    let str: string = unknownVar;
    let bool: boolean = unknownVar;
  */

  /**
   * Never 타입 : 어떤 타입에 never값을 할당 가능, but never 타입에 어떤값을 할당 불가능. 모든 타입의 서브집합(공집합) 
   */

  function neverExam() {
    function neverFunc(): never {
      while (true) {
      }

      let num: number = neverFunc();
      let str: string = neverFunc();
      let bool: boolean = neverFunc();
      /** 다운 캐스팅이라 오류.
      let never1: never = 10;
      let never2: never = "string";
      let never3: never = true;
      */

      /**
       * Void 타입: 
       * (반환값이 없는)리턴문이 없는 함수의 반환값 타입을 명시하는데 사용함. 
       * 타입 계층도에 중간에 있으나 undefined의 슈퍼타입. 
       * void타입의 변수에 undefined의 값 넣을 수 있음. 
       * 그래서 void함수에 return undefined해도 괜찮음 
       */
      function voidExam() {
        function voidFunc() {
          console.log("hi");
          return undefined;
        }

        let voidVar: void = undefined;
      }

      /**
       * any 타입: 타입 계층도 상에는 unknown타입의 서브타입으로 위치해 있으나 치트키 타입이라서 타입계층도를 완벽히 무시함. 
       * 모든타입의 슈퍼타입으로 위치하기도 하고, 모든타입의 서브타입으로 위치하기도 한다.(never 제외)
       */
      function anyExam() {
        let unknownVar : unknown;
        let anyVar : any;
        let undefinedVar : undefined;
        let neverVar: never;

        anyVar = unknownVar;

        undefinedVar = anyVar;
        /**  neverVar = anyVar; 
        다운캐스팅 타입오류 : never타입은 공집합이기 때문에 어떤 타입도 다운캐스팅 불가능함(any타입 포함).*/ 
      }
    }
  }

}