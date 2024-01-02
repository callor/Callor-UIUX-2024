# requestAnimationFrame

- window.requestAnimationFrame() 메소드는 브라우저에게 수행하기 원하는 애니메이션을 알리고 리페인트가 진행되기 전 해당 애니메이션을 업데이트하는 함수를 호출하게 한다. 즉, 리페인트 이전에 실행할 콜백을 인자로 받는다. 그런데 애니메이션의 경우, 리페인트 과정이 끝나지도 않았는데 다음 좌표로 이동하라고 애니메이션을 수행하는 경우, 애니메이션이 의도한 대로 부드럽게 움직이지 않게 된다. requestAnimationFrame은 이러한 문제를 해결해준다.

```js
const element = document.getElementById("some-element-you-want-to-animate");
let start, previousTimeStamp;
let done = false;

function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }
  const elapsed = timestamp - start;

  if (previousTimeStamp !== timestamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.1 * elapsed, 200);
    element.style.transform = "translateX(" + count + "px)";
    if (count === 200) done = true;
  }

  if (elapsed < 2000) {
    // Stop the animation after 2 seconds
    previousTimeStamp = timestamp;
    !done && window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```
