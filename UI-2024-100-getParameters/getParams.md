# JS 에서 URL 파라미터 가져오기

1. 현재 페이지의 URL과 파라미터 읽기
   현재 페이지의 URL을 가져오는 방법과 쿼리스트링을 가져오는 방법은 지난 포스팅에서 소개했습니다.
   [Javascript] 현재 페이지 URL 가져오기

- 현재 페이지의 URL을 가져오기 위해서는 아래와 같이 location 객체의 href 속성을 참조합니다.

```js
// "https://hianna.tistory.com/325?category=764998"
window.location.href;
```

- 전체 URL중 쿼리스트링(파라미터)만 가져오고 싶은 경우에는 아래 속성을 참조합니다.

```js
// "?category=764998"
window.location.search;
```

## 특정 파라메터 읽기

```js
const url = new URL("https://dic.daum.net/word/view.do?wordid=ekw000033653&q=coffee");

// URLSearchParams 객체
const urlParams = url.searchParams;

// URLSearchParams.get()
document.write(urlParams.get("wordid") + "<br>"); // ekw000033653
document.write(urlParams.get("q") + "<br>"); // coffee

// URLSearchParams.getAll()
document.write(urlParams.getAll("q") + "<br>"); // ['coffee']
```
