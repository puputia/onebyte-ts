/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로 만든 유니온 타입을 말함
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

// Admin -> {name}님 현재까지 {kickCount} 명 강퇴하였습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다. 
type User = Admin | Member | Guest;

function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;

    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}명 모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}명 오셨습니다.`);
      break;
  }


  // if (user.tag === "ADMIN") {
  //   // admin 타입 
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);

  // } else if ('point' in user) {
  //   // member 타입 
  //   console.log(`${user.name}님 현재까지 ${user.point}명 강퇴했습니다.`);

  // } else {
  //   // guest 타입 
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}명 강퇴했습니다.`);

  // }

}

// 비동기 작업의 결과를 처리하는 객체 

type LoadingTask = {
  state: "LOADING";
}

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS",
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

// 서로소 유니온 타입을 쓰면 ?옵셔널 체이닝 안써도됨. 


// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   // state가 LOADING 일때는 response,error가 없기 때문에 ?로 선택적 프로퍼티로 만들어줌
//   response?: {
//     data: string;
//   };
// };

// 로딩 중 -> 콘솔에 로딩중 출력
// 실패 -> 실패 : 에러메시지를 출력 
// 성공 -> 성공 : 데이터를 출력 
function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("로딩 중");
      break;
    }
    case "FAILED":
      console.log(`에러 발생 : ${task.error.message}`)
      break;
    case "SUCCESS": {
      console.log(`성공 : ${task.response.data} `)
    }

  }
}


const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은 ~~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "빅데이터",
  }
}
