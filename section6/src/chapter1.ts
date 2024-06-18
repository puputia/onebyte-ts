/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "이정환",
  age: 27,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("이정환", 27, "개발자"); 
console.log(employeeB);

const employC: Employee = { // 클래스 자체가 타입으로 정의 될 수 있음 (타입스크립트의 클래스는 타입으로 활용될 수 있다. )
  // 타입스크립트는 구조적으로 타입을 결정하는 구조적 타입 시스템을 따른다 
  // 그렇기 때문에 Class의 구조를 보고 이런 필드와 메서드가 있으면 Employee 타입이라고 하자 이런식으로 결정하면 되는 것이라고 이해하면 된다. 
  name: "", 
  age: 0,
  position: "",
  work() {

  },
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber : number;

  // 생성자
  constructor(
    name:string, 
    age:number,
    position: string,
    officeNumber:number
    ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}

