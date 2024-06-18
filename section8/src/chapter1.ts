/**
 * 인덱스드 엑세스 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

 

function printAuthorInfo(author: PostList[number]["author"]) { 
  // Post["author"]<=타입만 명시가능 
  // [][]중첩으로 대괄호를 써서 프로퍼티 가져올 수 있음. 
  console.log(`${author.name}-${author.id}`);
}


const post : PostList[number] = {
  title : "게시글 제목",
  content: "게시글 본문",
  author: {
    id: 1,
    name: "이정환",
    age: 27,
  }
};

printAuthorInfo(post.author);

type Tup = [number, string, boolean];

type Tup0 = Tup[0];

type Tup1 = Tup[1];

type Tup2 = Tup[2];

// type Tup3 = Tup[3];

type TupNum = Tup[number]; 
// 튜플은 길이가 고정되있는 타입이기에 존재하지 않는 인덱스의
// 타입을 추출하려하면 오류가 난다.
// 배열 타입을 추출할 때 처럼 Index에 number를 넣으면 
// 튜플 타입에 있는 모든 타입의 최적의 공통 타입을 뽑아온다. 그래서
// string | number | boolean 타입으로 추출한다.  