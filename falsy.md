# JS 에서 독특한 데이터 : falsy : 거짓같은 값

- 자체적으로 변수에 값을 저장하지 않거나, 일부 특별한 값을 저장하면 마치 변수가 boolean 처럼 작동하는 것

- `undefined`, `null`, `false`, `NaN`, `숫자 0`, `숫자 -0` `On`, `""`
- `const name = ""` : `name` 변수에 담긴 값이 `falsy` 가 된다

## falsy 를 활용한 코드 예제

```js
if(name === "") {} : name 변수에 저장된 문자열이 비어있을때
if(!name) {} 으로 사용할 수 있다

if(num === 0) {} : num 변수에 저장된 숫자가 0일때
if(!num) {} 으로 사용할 수 있다.

// 아래 코드는
if(name !== null) result = name
else result = "Korea"
// 다음과 같이 사용할수 있다
result = name || "Korea

// nation 변수의 값이 falsy 가 아니면
// result 변수에 "Republic of Korea" 문자열을 저장하라
const nation = "Korea"
const result = nation && "Republic of Korea"


const arr = []
if(arr.length > 1) {
    const result = arr[1]
}
// 위의 코드는 아래처럼 가능
const arr = [1,2,3,4,5,6,7,8]
const result = arr && arr[1]



```
