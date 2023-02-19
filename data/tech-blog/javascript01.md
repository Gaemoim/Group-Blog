---
title: Javascript 변수 설정(var, let, const)
date: "2023-02-17"
tags: ["Javascript"]
draft: false
thumnail: "/static/images/javascript/javascriptLogo.webp"
summary: "Javascript ES6이후의 Javascript 변수 설정(var, let, const)"
authors: ["yeonguk"]
---

# 변수

# 변수 설정(var, let, const)

javascript ES6 이전에는 변수를 선언할 수 있는 키워드는 var 뿐이었다.
하지만 변수 재할당을 하면 안되는 부분이 있었을 때, var 는 변수 재할당을 제한하지 않기에 나중에 **_휴먼에러_**(사람의 실수로 에러)가 생길 가능성과 **_메모리 누수_**의 위험성을 지니고 있다.
위의 문제를 방지하기 위해 let, const 가 생겨났다.

## var

- var 는 변수 재선언 허용
- var 는 함수 레벨 스코프이고, 사용과 동시에 값을 초기화 한다.

```jsx
var jaVar = "자바스크립트";
console.log(jaVar); // 자바스크립트

var jaVar = "javascript";
console.log(jaVar); // javascript
```

근데 이게 끔직한 일을 초래할 수도 있는게 만약 몇 천줄 이상의 코드가 있다고 치자.

```jsx
var sex = "male"
・・・・(몇 천줄)
var sex = "female"
・・・・(몇 천줄)
```

극단적인 경우지만 회사에 폐급이 들어와서 무지성으로 내 성별을 바꿔버렸다고 치자,
졸지에 내 성별이 바뀌어도 아무런 에러없이 진행될 수도 있다.

변수 재선언이 가능하다는 부분은 이해가 쉽다. 하지만 함수 레벨 스코프가 도대체 뭔 소린가?

```jsx
// var는 함수 레벨 스코프라 제어문이 끝난 다음에도 i를 호출하면 값이 출력된다.
for (var i = 0; i < 10; i++) {
  console.log(i);
}

console.log("i야 설마 아직 저장되있니? 있으면 대답해보렴.");
console.log(i); // 10
```

난 이제 더 이상 `i`가 필요 없는데 어딘가에 `i`가 계속 저장되어 있다.
뭔가 이러면 안되는 것 처럼 보이는데 이러면 안되는 게 맞다.
그럼 어떻게 해야할까?

```jsx
function countNum() {
  for (var i = 0; i < 10; i++) {
    console.log(i);
  }
}
countNum();
console.log("i야 이젠 안나와야지?", i); // Uncaught ReferenceError: i is not defined
```

위의 방식을 사용하면 `i`를 사용하고도 계속 저장되어 있지 않게 만들 수 있다.

근데 계속 이렇게 써야 한다고? 뭐 다른 방법으로 하는 방법이 있긴한데 그것도 준네 귀찮다.

변수 선언 하나 하는데 개 같은 거 너무 복잡한 거 아니여?
다른 사람들도 이런 생각을 하다보니 다음에 다룰 `let`, `const`가 나왔다.

## let, const

기존의 var로 선언하는 경우엔 문제가 많았다.

```jsx
// 기존에 있었던 변수 이름으로 재선언 했는데 에러가 안난다.
var a = 1;
var a = 2;

// 아니 이건 시벌탱 왜 되노? hoisting으로 인해 에러가 안나는건데 애초에 말이 안된다.
c = 3;
var c;
```

이런 거 보면 진짜 근본없는 언어였다.
하지만 let, const를 탑제한 javascript는 달라졌다.

- 변수 재선언이 불가능해졌다.
- let은 변수 재할당이 가능하지만, const는 변수 재할당이 불가능하다.

```jsx
// let
let a = 1;
let a = 2; // Uncaught SyntaxError: Identifier 'a' has already been declared
a = 3; // 이건 됨

// const
const b = 1;
const b = 2; // Uncaught SyntaxError: Identifier 'b' has already been declared
b = 3; // Uncaught TypeError:Assignment to constant variable.
```

let, const가 hoisting이 발생하지 않는 것은 아니다. 블록 레벨 스코프 단위로 일어날 뿐
값을 할당하기 전에 변수가 선언되어 있어야하며, const는 선언과 동시에 값을 할당해야한다.

```jsx
// let은 선언하고 나중에 값을 할당이 가능
let d
d = 6

// const 선언과 동시에 값을 할당 해야한다.
const e // Uncaught SyntaxError: Missing initializer in const declaration
```

## 그렇다면 어케 써야하나?

const를 기본적으로 사용하여 **_불필요한 변수 재사용을 방지_**하고
특별히 **_재할당이 필요한 경우_** let을 사용하는 것이 현명하다.

## 참고

---

### 스코프

위에 스코프라는 말이 자주 나온다. 함수 레벨 스코프, 블록 레벨 스코프… 솔직히 뭔 개소린지 싶을 수 있다.
스코프는 유효한 참조 범위를 뜻한다.

**함수 레벨 스코프**

함수 내에서 선언된 변수는 함수 내에서 유효하며 함수 외부에서 참조할 수 없다.
즉, 함수 내부에서 선언한 변수는 지역 변수이고 외부에서 선언한 변수는 모두 전역 변수로 취급된다.

```jsx
function func() {
  if (true) {
    var a = 5;
    console.log(a); // 5
  }
  console.log(a); // 5
}

func(); // 5
console.log(a); // ReferenceError: a is not defined
```

**블록 레벨 스코프**

블록은 if, for, while, try/catch등 중괄호 내부에서 일어나는 것들을 이야기 한다.
중괄호가 닫기는 순간, 중괄호 안에 있었던 변수들은 유효하지 않다. 따라서 코드 블록 외부에서 참조할 수 없다.

```jsx
function func() {
  if (true) {
    let a = 5;
    console.log(a); // 5
  }
  console.log(a); // ReferenceError: a is not defined
}

console.log(a); // ReferenceError: a is not defined
```

### hoisting

hoisting이란 함수 내부에 있는 선언들을 모두 끌어올려 해당 함수 유효 범위의 최상단에 선언하는 것이다.

**var : 함수 레벨 hoisting**

```jsx
// 변수 hoisting
console.log(a); // undefined

var a = 1;
console.log(a); // 1

// 함수 hoisting
varFunc(); // var

var varFunc = () => {
  console.log("var");
};
```

변수 a 가 선언되기 전에 참조되었음에도 에러가 발생하지 않음.
이는 코드 실행 전에 자바스크립트 내부에서 미리 변수를 선언하고 undefined 로 초기화를 해두었기 때문
함수 또한 동일하게 선언되기 전에 호출됨에도 에러가 발생하지 않음.

**let, const: 블록 레벨 hoisting**

```jsx
// 변수 hoisting
console.log(a); // ReferenceError: a is not defined

let a = 1;
console.log(a); // 1

// 함수 hoisting
letFunc(); // Uncaught ReferenceError: letFunc is not defined
let letFunc = () => {
  console.log("let");
};
```

변수 a 가 선언되기 전에 참조하니 에러가 발생함.
이는 hoisting이 발생하지 않는 것이 아닌, 변수의 선언과 초기화 사이에 일시적으로 변수 값을 참조할 수 없는 구간인 TDZ(Temporal Dead Zone)에 빠졌기 때문에 보이는 현상이다.

함수를 사용하거나 let 또는 const 로 변수를 선언하는 경우, 자바스크립트 내부에서는 코드 실행 전 변수 선언만 해둘뿐 초기화는 코드 실행 과정에서 변수 선언문을 만났을 때 수행한다.
그렇기 때문에 hoisting이 발생하기는 하지만, 값을 참조할 수 없기 때문에 동작하지 않는 것처럼 보인다.
