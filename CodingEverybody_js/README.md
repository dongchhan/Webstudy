# Webstudy_js

## 1. 수업 소개 
- 선행: WEB1(HTML & Internet)  

- 사용자와 상호작용하는 웹 페이지를 위한 JS  
 
## 2. 수업의 목적
- 실습 목표: 웹 페이지 night/day 모드 구현  

- JS가 HTML을 제어하는 언어임을 실습 결과물을 통해 느껴봄  

## 3.HTML과 JS의 만남 : script 태그 
- `<script>여기에 JS 코드 작성</script>`  

- 정적인 HTML, 동적인 JS   
ex) 1+1 -> 1+1 vs 2

## 4.HTML과 JS의 만남 : 이벤트
- html 안에서 특정 조건에 이벤트를 발생시키는 attribute
해당 attribute 뒤에는 JS 코드가 들어가도록 돼있음
- `<input type="button" value="hi" onclick="alert('hi')">`  
- `<input type="text" onchange="alert('changed')">`  
- `<input type="text" onkeydown="alert('key down!')">`  

## 5.HTML과 JS의 만남 : 콘솔 
- 브라우저 검사기 console 창에서 파일 생성 없이 JS 코드를 동작시켜볼 수 있음  
ex) 글자 수 세기 

- 검사기 Elements에서 esc키를 통해서 HTML 코드와 콘솔창을 함께 볼 수 있음  

- 페이스북 댓글 이벤트 당첨자 추첨 예시  

## 6.데이터타입 - 문자열과 숫자
- 데이터타입(자료형) ; Boolean, Null, Undefined, Number, String, Symbol  

- `str.length`
- `str.toUpperCase()`
- 등등의 여러 methods 체험 

## 7.변수와 대입 연산자 
- `var name = 'dongchan'`
- 문자열 내부 `"+변수명+"` 형식으로 변수 대입 가능 

## 8.웹브라우저 제어
- html은 정적인 언어라, 한번 작성된 형태에서 변경이 안된다. 
- JS를 통해 html을 변경시킬 수 있다. 

## 9-11.CSS 기초
__Agenda__
* CSS는 어떤 목적의 언어인가?
  - HTML을 꾸미기 위한 목적
* CSS를 웹페이지에 삽입하는 방법은 무엇인가?
  1. 태그 내 Style 속성 
  2. Style 태그 내 CSS문 작성 (Selector 사용)
* style 속성은 무엇인가?
  - 해당 태그에 CSS를 적용하는 것
* 선택자가 무엇인가?
  - Style 태그 내에서 CSS를 작성할 때, 적용 대상 태그를 지정하는 것 

## 9.CSS기초: Style 속성 
- `<h2 style="backgound-color:coral; color:powderblue">JavaScript</h2>`

## 10.CSS기초: Style 태그 
- CSS나 JS를 적용해주기 위해서 사용하는 어떠한 의미도 없는 HTML 태그 
- `<div></div>`: 줄바꿈 O
- `<span></span>`: 줄바꿈 X
- `<span style="font-weight:bold;">JavaScript</span>`

- Style 태그: Style 속성처럼 적용할 태그마다 일일히 작성하지 않아도 됨. 
- `<style></style>` 안에 CSS 작성 
- `js{"font-weight:bold; color:red;}` : 태그 명이 js인 태그에 적용 
- `.js{"font-weight:bold; color:red;}` : class가 js인 태그에 적용 

## 11.CSS기초: 선택자(Selector)
- `#first{color:green;}` : id가 first인 태그에 적용
- class와 달리 id는 유일해야함 
- 우선순위: id > class > tagname

## 12.제어할 태그 선택하기
- JavaScript문 내에서 HTML 태그를 선택하여 제어하는 방법 
- `document.querySelector('body')` : `<body>`태그를 선택 
- `document.querySelector('body').style.backgoundColor = 'black;` : `<body>`태그의 스타일 속성을 변경 

## 13.프로그램,프로그래밍,프로그래머
- 프로그램 -> 순서라는 의미가 들어있음 
- 프로그래밍 -> 순서를 만드는 행위
- 프로그래머 -> 순서를 만드는 사람 

- HTML은 시간의 순서에 따라 적용되는 언어가 아님 -> 프로그래밍 언어X
- JavaScript는 시간의 순서에 따라서 여러 기능이 실행되어야 함 -> 프로그래밍 언어 O

## 14~16 조건문 기초
### 14.조건문 예고
### 15.비교 연산자와 Boolean 데이터 타입 
- `document.write();` : html에 내용 추가 
- `document.write(1===1);` : 비교 연산자 '===' 
- `&lt;`: '<'; less than 
### 16.조건문
```javascript
if(true){
    document.write('true')
} else {
    document.wrtie('false')
}
```

## 17.조건문의 활용
- 조건문을 통해 button을 토글 스위치 형태로 구현 
- `document.querySelector('#night_day).value` : 해당 버튼 태그의 value를 선택. 

## 18.리팩토링 중복의 제거
- 코드의 중복 및 비효율을 개선
- 'this': 해당 태그 자신을 가르킴 
` `document.querySelector('#night_day).value`--'this.value`
- 중복해서 등장하는 태그를 변수로 선언 
`var target = document.querySelector('#body');`

## 19~22 배열, 반복문 기초
### 19.반복문 예고
### 20.배열
- 선언:
`var coworkers = ["egoing", "leezche"];`
- 인덱싱:
`coworkers[0]`
- Count:
`coworkers.length;`
- 추가:
`coworkers.push("duru")`
### 21.반복문
> 의문에 대한 추가 탐색 내용
- `'document.write()`는 HTML문서 내 해당 `<script></script>`태그의 위치에 적용됨
- `'<script>` 태그는 HTML의 파싱 과정 중 멈추고 실행되기 때문에, `</body>`의 직전에 일반적으로 사용
- 'async', 'defer' 속성을 추가하여 HTML파싱 흐름을 제어하는 방법이 있음
- `'<script async src="..."></script>`: HTML 파싱과 병렬로 스크립트를 다운로드하고, 다운로드가 끝나는 즉시 실행하므로 HTML 파싱이 중간에 멈출 수 있음. 순서가 중요하지 않은 독립적인 스크립트에서 사용
- `'<script defer src="..."></script>`: HTML 파싱과 병렬로 스크립트를 다운로드하고, HTML 파싱이 모두 끝난 후 실행, `</body>` 앞에 두는 것과 효과가 비슷하며, 순서가 보장됨 
### 22.배열과 반복문 
- 배열에 들어있는 string 개수만큼 해당 string 별 HTML 링크를 생성하는 JS 코드 

## 23.배열과 반복문의 활용 
- day/night 버튼에 a태그(링크)색 일괄 변경 
- `var alist = document.querySelectorAll('a');`
- `alist[i].style.color = 'powderblue';`

## 24~27 함수 기초
### 24.함수예고
### 25.함수
- `function funcName () {}` 방식으로 함수 정의
### 26.함수:매개변수와 인자
- Input: Parameter(매개변수) & Argument(인자)
- Output: Return(반환값)
### 27.함수(리턴)
- 표현식: `1+1` 은 `2`에 대한 표현식 
- 함수가 어떤 값의 표현식이 되게 하려면 return이 필요함

## 28.함수의 활용
- 기존 day/night 버튼 클릭시 적용되어야 할 JS코드를 `<script>`태그 내에서 `nightDayHandler()` 함수로 정의
- 이후, HTML day/night 버튼 태그 내 onclick에서는 `nightDayHandler()` 함수를 적용하는 것으로 단순화

## 29~32 객체 기초
### 29.객체예고
- 반복되는 기능을 최대한 함수로 만들어보면서 함수 개수가 늘어나면서 관리가 힘들어짐을 체감해보기 
- 객체를 활용해서 함수를 정리할 수 있음 
### 30.객체 쓰기와 읽기
- 객체: 이름이 있는 정리정돈 상자 
### 31.객체와 반복문
- for문 써서 객체 하나씩 순회 
### 32.객체프로퍼티와 메소드
- Property: 객체에 소속된 변수
- Method: 객체에 소속된 함수

## 33.객체의 활용
- 29강에서 색 변경 관련 기능들을 전부 함수로 만들었던 것, 객체로 정리정돈함
- 정의한 함수의 개수가 많아질 때, 그 함수를 객체 단위로 분류할 수 있음 

## 34.파일로 쪼개서 정리 정돈하기
- 여러 페이지에 동일한 JS코드가 필요할 때, js파일을 따로 만들어서 `<script src="colors.js"></script>` 와 같은 형식으로 불러올 수 있다. 
- 서버도 cache 측면에서 훠씬 네트워크 트래픽도 줄고 효율적임

## 35.라이브러리와 프레임워크
- JQuery 라이브러리 소개 
- 라이브러리 사용 방법
  1. jquery 홈페이지에서 다운로드 후, 내 작업 디렉토리에 파일 이동 후 사용 
  2. CDN을 활용, src를 통해서 활용가능 
    - jquery 홈페이지 내 CDN 항목 : `<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>`
    - https://developers.google.com/speed/libraries?hl=ko#jquery

## 36.UI vs API
- UI: User Interface 
- API: Application Programming Interface

## 37.수업을 마치며
- 추가로 공부하면 좋은 키워드
  - document 객체: 웹 페이지에 어떤 tag를 삭제하거나 자식 tag를 추가하고 싶다면 ... 
  - DOM(Document Object Model): document는 DOM의 일종, document로 해결되지 않는다면 ...
  - window 객체: 웹브라우저 자체를 제어해야한다면 ...
    - 현재 열려 있는 웹페이지 주소를 알아내야 하는 상황
    - 새 창을 열어야 하는 상황
    - 웹브라우저의 화면 크기를 JS를 통해 알아내야 하는 상황
  - ajax: 현대적인 웹앱을 만드는데 필수적인 테크닉, 웹 페이지를 Reload 하지 않고 정보를 변경해야 한다면 ...
  - cookie: 사용자를 위한 개인화된 서비스 제공 가능, 웹 페이지가 Reload 되어도 현재 상태를 유지하고 싶다면 ...
  - offline web application: 인터넷이 끊겨도 동작하는 웹 페이지를 만들고 싶다면 ...
  - webRTC: 화상통신 웹 앱을 만들고 싶다면 ...
  - speech api들: 사용자의 음성을 인식하고 음성으로 정보를 전달하고 싶다면 ...
  - webGL: 3차원 그래픽으로 게임 같은 것들을 만들고 싶다면 ... 
  - webVR: 가상현실에 관심이 많다면 ... 

