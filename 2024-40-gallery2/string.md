# JS 에서 변수를 직접대입한 문자열 생성하기

```js
const name = "홍길동";
const age = 30;

const 홍길동1 = name + "의 나이는 : " + age;

// 문자열 interpolation
// 문자열 template 라고 표현한다.
// 문자열에 직접 변수를 사용하여 값을 표현하는 방법
const 홍길동2 = `${name} 의 나이는 : ${age}`;

for (let i = 0; i < 9; i++) {
  // 3 x 1 = 3
  // 3 x 2 = 6
  console.log(`3 x ${i + 1} = ${(i + 1) * 3}`);
}
```

- 문자열에 ``(back tit) 과 함께 변수, 연산식 등을 포함하여 문자열을 생성하는 규칙
