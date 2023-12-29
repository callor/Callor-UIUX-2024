# Intersection Observer - 요소의 가시성 관찰 [HEROPY Tech]

- `boundingClientRect`: 관찰 대상의 경계 사각형을 DOMRectReadOnly로 반환
- `intersectionRect`: 관찰 대상의 교차한 영역 정보를 DOMRectReadOnly로 반환
- `intersectionRatio`: 관찰 대상의 교차한 영역의 비율을 0.0과 1.0 사이의 숫자로 반환  
  (intersectionRect 영역에서 boundingClientRect 영역까지 비율, Number)
- `isIntersecting`: 관찰 대상이 교차 상태인지 아닌지 반환(Boolean)
- `rootBounds`: 지정한 루트 요소의 사각형 정보를 DOMRectReadOnly로 반환
- `target`: 관찰 대상 요소(Element) 반환
- `time`: 변경이 발생한 시간 정보(DOMHighResTimeStamp) 반환

## Options

- Options를 통해 관찰이 시작되는 상황에 대한 옵션을 설정할 수 있다. 기본값들이 정해져 있으므로 필수는 아니다.

```js
// Options를 설정하고 적용하는 예제
let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};
```

- `let observer = new IntersectionObserver(callback, options);``
- 위 예제처럼 root, rootMargin, threshold 세 가지 값을 옵션값으로 설정할 수 있다.

### root

- 대상 객체(target)의 가시성을 확인할 때 사용되는 뷰포트 요소이다. 반드시 대상 객체의 조상 요소이어야 하며, root 값이 null 이거나 지정되지 않을 때 브라우저의 뷰포트가 기본값으로 설정된다.

```js
const io = new IntersectionObserver(callback, {
  root: document.getElementById("viewport"),
});
```

## rootMargin

- root 가 가진 바깥 여백(Margin)을 뜻한다. CSS의 margin 속성과 유사한데, margin 값을 이용해 root 범위를 확장 / 축소할 수 있다.
  px 또는 %로 나타낼 수 있으며, 단위를 꼭 입력해야 한다.

- e.g. "10px 20px 30px 40px" (top, right, bottom, left)
- 기본값은 0 이다.

```js
const io = new IntersectionObserver(callback, {
  rootMargin: "200px 100px", // (top & bottom: 200px, right & left: 100px)
});
```

### threshold

- observer의 콜백이 실행될 대상 요소(target)의 가시성이 얼마나 필요한지 나타내는 값이다. 숫자 혹은 숫자 배열로 나타낼 수 있다.
- 기본값은 Array 타입의 [0] 이며, 단일 값의 경우 그냥 숫자(Number)로만 적어도 된다.

- 0: 타겟의 가장자리 픽셀이 Root 범위를 바로 교차하는 순간(타겟의 가시성이 0%) 옵저버가 실행됨
- 0.1: 타겟의 가시성이 10%일 때 옵저버가 실행됨
- [0, 0.2, 1]: 타겟의 가시성이 0%, 20%, 100%일 때 모두 옵저버가 실행됨

```js
const io = new IntersectionObserver(callback, {
  threshold: 0.1, // or `threshold: [0.1]`
});
```
