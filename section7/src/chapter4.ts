/**
 * 제네릭 클래스
 * 제네릭 클래스는 제네릭 인터페이스나 제네릭 타입 변수와는 다르게 클래스의 생성자를 호출 할 때 이생정자의 인수로 전달하는 값을 기준으로 타입을 추론한다. 
 * 그렇기 때문에 제네릭 인터페이스나 제네릭 타입변수와 다르게 앞에 반드시 타입을 명시해주지 않아도 된다.
 */

class List<T> {
  constructor(private list : T[]) {}
  
  // 메서드 
  push(data : T) {
    this.list.push(data);
  }
  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}



const numberList = new List([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1","2"]);
stringList.push("hello");
stringList.print();