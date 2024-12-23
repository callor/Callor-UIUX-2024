# HTML

- 요소(Element): 시작태그+웹콘텐츠+끝태그
  `<h1>Hello HTML5</h1>`

- 태그(Tag) : 요소명+꺽쇠 : 웹콘텐츠를 담는 박스
- 태그의 종류 : 시작태그 , 끝태그(`</h1>`)
- 태그는 왜 사용하나요? : 웹콘텐츠를 담으려고 사용해요
- 웹콘텐츠는 무엇인가요? 텍스트 , 이미지 , 비디오, 오디오
- 텍스트를 담는 태그 : `<h1>~<h6>` , `<p>` , `<span>...`
- 이미지를 담는 태그 : `<img src="이미지경로" , alt="이미지 설명">` 끝태그가없다 : 단일태그
- 비디오를 담는 태그 : `<video></video>`
- 오디오를 담는 태그는 : `<audio></audio>`
- 속성(Attribute)과 속성값은 시작태그에 작성한다.

## HTML5의 기본적인 구조

- 구조 (Structure), 스타일(View), 기능 (Functionally)
- HTML은 구조를 담당하고, CSS는 스타일을 담당하고 , jS
- (인터랙티브)과 기본적인 기능을 담당한다.

- 선언문 : 문서형 정의(DTD)
  `<!DOCTYPE html>`

- html 문서의 시작과 끝
  `<html></html>`
- en,ja,ru,ch,de영어일본러시아중국독일
  `<html lang="ko">`

## meta tag

- meta, title , script , link , style
- meta 태그 : 문자세트(charset), 제공자 (copyright), 키워드(keyword)

- 언어(language) 등의 문서의 정보 또는 성격을 기술
- ★이 코드가 없으면 한글이 깨져 보일수 있다
  `<meta charset="utf-8" />`

- 반응형 웹을 구현하기 위해 반드시 필요한 코드
  `<meta name="viewport" content="widht=device-width, initial-scale=1.0" />`

<!-- 웹브라우저의 제목 표시줄에 노출됨, 문서의 제목을 지정 -->

`<title>callor.com</title>`

- 타이틀 태그(★필수태그★)를 중심으로 위쪽에는 메타태그를 작성하고, 아래쪽에는  
   링크태그 , 스크립트 태그를 작성한다

- link 태그 : 외부 스타일시트 파일,아이콘을 포함하는데 사용 //필수 속성href,rel
  `<link href="https://fonts.googleapis.com/css?family=Nanum+Gothic" rel="stylesheet" />`
  `<link href="./css/style.css" rel="stylesheet" />`

`</head>`

## 시맨틱 태그 : ★의미★가 있는 태그 (컴퓨터가 미리 예측할수 있게 한다.)>검색속도향상 웹 접근성 , 웹 호환성

- `header` : 로고,탑메뉴(로그인,회원가입,사이트맵,정보수정)
- `nav` : 메인메뉴
- `section` : 본문 내용
- `article` : 본문의 독립된 내용
- `aside` : 본문의 독립된 메뉴 또는 배너
- `footer` : 푸터로고, 회사정보, SNS버튼, 사이트맵
