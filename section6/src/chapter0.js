/**
 * 클래스
 */

let studentA = {
  name: "이정환",
  grade: "A+",
  age: 27,
  study() {
    console.log("열심히 공부 함")
  },
  introduce() {
    console.log("안녕하세요!");
  },
}

class Student {
  // 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 공부 함");
  }
  introduce() {
    console.log("안녕하세요!");
  }
}

class StudentDeveloper extends Student {
  // 필드
 
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name,grade,age); // super호출하게되면 부모클래스 superclass의 생성자가 호출이된다.
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드


  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`)
  }
}

const studentDeveloper = new StudentDeveloper('이정환', 'B+', 27, 'TypeScirpt');

console.log(studentDeveloper);
studentDeveloper.programming();


// 클래스를 이용해서 만든 객체 -> 인스턴스
// 스튜던트 인스턴스 
// let studentB = new Student("홍길동", "A+", 27);
// console.log(studentB);
// studentB.study();
// studentB.introduce();
