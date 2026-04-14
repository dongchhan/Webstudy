# Chaper 2-HTML 뼈대

주요 태그 6개
```
<div></div>
<p></p>
<img src=“주소” width=“너비“/>
<input type=“password” />  // type 종류 탐색
<button></button>
<a href=“주소”></a>  // 링크 
```

추가 공부 태그
```
<h1>~<h5>: 타이틀 만들 때 쓰임. 
<head> 태그 안에 있는 태그들 
	- <meta> : 웹 서버와 웹 브라우저 사이에 주고받는 정보를 정의, 문서 자체의 특성을 나타냄 
	- <title> : 웹사이트가 열리면 상단에 생기는 tab에 이름을 나타냄 
	- <link> : 필요한 스타일이나 아이콘 등 외부 문서를 html 문서에 연결시킴
<strong> </strong> : 볼드 처림 
<ul></ul> : unordered list, 2단 구조
<li>항목</li>
<audio src=”“ controls>
<table></table> : 표, 3단 구조
<tr></tr> : table row
<td></td> : table data
<th> : table header
<u></u> : underline, 밑줄
```

# Chapter 3 - CSS 웹사이트 꾸미기

CSS를 적용하는 방법 3가지 
- 태그에 직접 적용
- id(#)를 통해 적용
- class(.)를 통해 적용(이 코스에서는 이거만 씀, 이걸로 거의 다 됨)
```
.red {
	color:red;
	background-color:yellow;
	border: 5px solid blue;  # 두께, 스타일, 색감
	text-align: center;  # 가운데 배열
}
```

한 태그에 여러 스타일을 동시에 적용시킬 수 있다.  
`<div class=“style1 style2”></div>`

박스 그리기
```
.box {
	border: 1px solid blue;
	width: 200px;
	height: 200px;
}
```


HTML태그에 스타일을주는 방법🔗  
1. HTML 태그에 직접주는 방법 (앞으로 다룰 예정)  
어떤 태그에 공통적인 스타일을 주고싶을 때 사용하는 방법 

```      
div {
    color:red;
}
```
2. id 를 이용해 주는방법  
class 와 사용방식이 비슷하지만 한번에 하나의 스타일만 줄수있음, 주로 자바스크립트에서 많이 쓰이고 스타일링에는 많이 안쓰이는 방식

```
#new-style {
color:red;
}

<div id="new-style">
```

3. class를 이용해 주는 방법 (강의에서 사용된 방법)  
한번에 여러개의스타일을 줄수있다. 제일 많이 쓰이는 방법
```
.new-style {
color:red;
}

<div class="new-style">
```
 
4. 복합 선택자

- 일치 선택자:두가지 조건을 동시에 만족하는 요소 선택  
``` 
div.new-style{
      /*div태그에 new-style클래스
}
```
- 자식선택자(직접적인 자식)  
```
div>.new-style{
  /* div의 자식요소중 class="new-style"선택
}
```
- 후손 선택자(자식의 자식도 포함)  
```
div .new-style{
/* div 후손요소들 중에서 class="new-style"
}
```

수업중 사용된 스타일🎨  
- color : 텍스트의 색을 바꿈   
- background-color: 배경색을 바꿈  
- border : 테두리를 그려줌, 3개의 인자를 받음 (두께, 스타일, 색깔)  
- width / height: 넓이와 높이를 지정하는데 쓰임  
- text-align : 정렬 (left, center, right)  
- margin : 내 영역 밖에 공간을 줌 (top, left, right, bottom)  
- padding: 내 영역 안에서 공간을 줌 (top, left, right, bottom)  


# Chapter 4 - 구글 웹사이트 만들기

우선 필요 요소 구현하고 스타일(배치) 나중에 생각하기 

일반적인 태그는 가로로 이어붙여진다.  

‘Font awesome’ 웹 페이지에서 아이콘 가져올 수 있다.  
복붙해서 `<i>` 태그만 하면 아이콘이 안 뜬다 	
CDN 이라는 개념이 등장 (Content Delivery Network)	
`<script scr=“http: ~~ .js” crossorigin=“anonymous”></script>`  
이 링크를 head에 넣으면 된다 

div vs span : 줄바꿈 차이 

정렬css: `float: right;`   

밑줄 없애기: `text-decoration: none;`  

border를 주면 디자인이 편해짐, 그리고 나중에 border 없애주면 됨  

margin(4방향 모두) vs margin-left(왼쪽만)  

마우스 호버링 시 밑줄: 이벤트를 주기  
- .nav-item:hover {}  
- .nav-item 스타일에 hover 이벤트가 생기면 ~   
- 그 외, :active, :focus 등이 있음    

display 속성: block, inline, flex, contents …   
- 브라우저 검사기 element.style {} 로 테스트 해볼 수 있음   

검색창 안으로 아이콘 집어넣기   
- position: relative;  
- 검색 커서 시작점 오른쪽으로: padding-left:40px;	  
- 검색 커서 끝점 왼쪽으로: padding-right:40px;  
	 
padding의 값은 1/2/4개가 들어갈 수 있다.  
- 1: 전방향, 2: 세로/가로, 4: top부터 시계반대방향 4개값  

이번편에선 스타일이 좀 많이 나와서 정리를 해봤습니다!🏋️‍♂️  
- display : 요소가 어떻게 보여질지를 결정  
- border: 1px solid red; - 테두리를 그려준다 (두께, 스타일, 색깔)  
- border-radius : 모서리를 둥게함   
- width: 넓이 지정   
- height: 높이 지정  
- position: html태그를 위치시키는 방식 지정 (다음 챕터에서 다룰 예정^^)  
- background-color: 배경색  
- font-family: 폰트 스타일  
- box-shadow: 박스뒤에 그림자   
- color: 글씨색 (16진수, rgb, 색깔이름 이렇게 세가지로 표현 가능)  

맘에드는 스타일 발견 -> selector로 선택 -> 스타일확인 -> 내 코드에서 스타일만들어서 적용 -> html에 적용 -> 확인

position: absolute; 일 경우 컨텐츠 만큼만 border가 쪼그라듬  
- width:100%로 해줘야함


# Chapter 5 - HTML을 좀더 쉽게 움직이는 방법

Position속성에 값들🎈 
1. static : 웹사이트의 기본 속성값 , top right bottom left 등 위치 속성은 무시됨.
2. relative: HTML태그가 있는 위치에서 left right top bottom값을 통해 움직임 
3. absolute: 부모영역에서  left right top bottom 을 이용해 주어진 위치로 움직임 
* 단! 여기서 부모란?: 부모 태그가 relative, absolute, fixed 속성 중 하나여야 함. 만약 부모태그가 해당 속성을 가지고있지 않다면 body태그 기준으로 움직임 왜냐하면 body태그는 relative를 기본 속성으로 가지고 있기 때문이다 
4. fixed : absolute와 비슷하지만 스크롤로 내려도 그 위치에 고정, 무조건 브라우저 창 기준임
5. Sticky : relative와 비슷하지만 스크롤로 내리면 fixed처럼 그 위치에 고정 

flexbox 의 특징!🎊
1. display: flex는 모든 요소를 가로로 둔다 
2. display: flex는 부모한테 적용을 하고 자손을 건트롤 한다.
3. justify-content :가로로 요소들을 움직인다 (flex-start, center, flex-end, space-between, space-around 등의 값이 있음)
4. align-items: 세로로 요소들을 움직인다  
5. flex-direction:column 가로로 정렬된 요소를 세로로 바꾸고 justify-content는 세로로 align-items는 가로방향으로 바뀐다 
6. order: 자식 요소 하나의 순서 바꿈, 원래 자리 기준으로 양/음수로 지정 
7. align-self: 자식 요소 하나만 align-items값을 따로 지정할 수 있다. 
8. flex-wrap: 한줄에 다 우겨넣지 않고 여러줄로 가능하게함, nowrap/wrap/wrap-reverse
9. flex-flow: flex-direction과 flex-wrap을 동시에 사용하도록 ex) flex-flow: column wrap 
10. align-content: wrap으로 인해 줄바꿈된 여러 줄 사이의 간격 조정 
  flex-start/flex-end/center/space-between/space-around/stretch

flexbox연습하는 웹사이트🐸: https://flexboxfroggy.com/#ko  

