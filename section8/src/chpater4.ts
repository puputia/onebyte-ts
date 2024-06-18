/**
 * 템플릿 리터럴 타입
 * 템플릿 리터럴을 활용하여 타입을 조합한 타입을 만들 수 있다.
 * 문자열로 여러가지 상황을 표현해야할 경우에 유용하게 사용할 수 있다. 
 * 문법의 난이도가 높지 않고 실제로 사용해야할 경우가 많지는 않음.
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

// 사용
// const coloredAnimal : ColoredAnimal = ""