/**
 * 접근 제어자
 * access modifier
 * => public private protected
 */

/*접근 제어자가 붙어있는 매개변수들은 자동으로 필드도 정의하고, 심지어 필드의 값 초기화도 자동으로 한다.  
    this.name = name;
    this.age = age;
    this.position = position; -> 삭제해도 오류 발생 x 자동으로 값들이 할당되기 떄문에  

/**
 * public : 기본적 접근 제한자, 아무것도 제한하지 않음
외부에서 접근 가능함. public을 지워도 public 임.

private: 가장 private하고 가장 제한적인 접근 제어자.
이 클래스 내부가 아니면 어디든지 접근이 불가능해짐. 
심지어 파생클래스에서도 접근할 수 없다.

protected : 외부에서는 아예 접근 자체가 불가능하도록 막지만 파생 클래스 내부에서는 그래도 접근 할 수 있도록 해주는 마치
public과 private의 중간에 있는 접근 제어자다
 */

class Employee {
  // 필드 : 
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자 
  // 생성자 매개변수에 접근제한자를 달아주면 타입스크립트가 자동으로 필드를 알아서 만들음. 그렇게 때문에 필드를 굳이 또쓸 이유가 없음. 생산자에게 접근제어자를 달 때, 필드 제한자는 생략해주어야한다. 
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {
    // this.name = name;
    // this.age = age;
    // this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.name} 일함`);
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //생상자
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
  // 메서드
  func() {
    this.age; // protected 접근제어자로 내부 메서드, 파생 메서드에서 접근 가능, 외부에서 접근 불가 
    // this.name; 파생 클래스에서 private으로 접근 불가
  }
}

const employee = new Employee("이정환", 27, "developer");
// employee.name = "홍길동"; 외부에서 private으로 접근 불가, 
// employee.age = 30; 외부에서 private으로 접근 불가
employee.position = "디자이너";

console.log(employee);