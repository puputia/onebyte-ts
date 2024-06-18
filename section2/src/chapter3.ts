//  object
// 객체 리터럴 타입
// 구조를 기준으로 객체를 정의 -> 구조적 타입 시스템
// Property Based Type System
let user: {
  // ? : 선택적 프로퍼티(Optional)
  id?: number; 
  name: string;
} = {
  id: 1,
  name: "이정환"
};

let config: {
  readonly apiKey: "MY API KEY",
};

// config.apiKey = "hacked";

