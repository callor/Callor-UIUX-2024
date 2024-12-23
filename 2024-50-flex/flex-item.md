# Flex-item 속성

```css
/* One value, unitless number: flex-grow */
flex: 2;

/* One value, length or percentage: flex-basis */
flex: 10em;
flex: 30%;

/* Two values: flex-grow | flex-basis */
flex: 1 30px;

/* Two values: flex-grow | flex-shrink */
flex: 2 2;

/* Three values: flex-grow | flex-shrink | flex-basis */
flex: 2 2 10%;
```

## 유연하게 늘리기 : `flex-grow`

- flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성
- flex-grow에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이  
  유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 된다.
- 기본값이 0이기 때문에, 따로 적용하기 전까지는 아이템이 늘어나지 않는다.
- flex-grow에 들어가는 숫자의 의미는, 아이템들의 flex-basis를 제외한 여백 부분을  
  flex-grow에 지정된 숫자의 비율로 나누어 가진다

## 유연하게 줄이기 : `flex-shrink`

- flex-shrink는 flex-grow와 쌍을 이루는 속성으로, 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정한다.
- flex-shrink에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면  
  해당 아이템이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아진다
- 기본값이 1이기 때문에 따로 세팅하지 않았어도 아이템이 flex-basis보다 작아질 수 있다
- flex-shrink를 0으로 세팅하면 아이템의 크기가 flex-basis보다 작아지지 않기 때문에  
   고정폭의 컬럼을 쉽게 만들 수 있다. 고정 크기는 width로 설정한다

```css
.container {
  display: flex;
}

.item:nth-child(1) {
  flex-shrink: 0;
  width: 100px;
}
.item:nth-child(2) {
  flex-grow: 1;
}
```

## 값이 한 개일 때

- 단위가 없으면 flex-grow 값이 된다.
- 단위가 있으면 flex-basis 값이 된다.

## 값이 두 개일 때

- 첫번째 값은 단위가 없는 숫자여야 한다. 또한 첫번째 값은 flex-grow가 된다.
- 두번째 값은 단위가 없으면 flex-shrink, 단위가 있거나 auto면 flex-basis가 된다.

## 값이 세 개일 때

- 첫번째 값은 flex-grow, (단위 없어야 함)
- 두번째 값은 flex-shrink, (단위 없어야 함)
- 세번째 값은 flex-basis 값이 된다. (단위 있거나 auto여야 함)

```

```
