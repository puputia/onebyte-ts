/**
 * 프로미스
 * 제네릭 클래스를 기반으로 타입이 선언되어 있기 때문에 <number>이렇게 타입 변수로 비동기 처리의 결과값의 타입을 정의해줄 순 있지만 // resolve(20);
 * 실패했을때(reject) 타입은 정의해줄 수 없다.(any타입 : {}, 함수, 문자열 등등)
 * 타입변수<number>를 빼먹으면 기본적으로 비동기 처리의 결과값이 unknown 타입으로 추론된다. 
 */

const promise = new Promise<number>((resolve,reject)=>{
  setTimeout(()=> {
    // resolve(20);
    reject("~~ 때문에 실패");
  }, 3000);
});

promise.then((response)=>{
  console.log(response * 10); // 20
});

promise.catch((err)=>{
  if(typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id : number;
  title : string; 
  content: string;
}
function fetchPost() : Promise<Post> {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve({
        id: 1,
        title: "게시물 제목",
        content:"게시글 컨텐츠"
      });
    },3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post)=> {
  post.id;
});