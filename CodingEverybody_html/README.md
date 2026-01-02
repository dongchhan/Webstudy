# Webstudy_html

## 커버 페이지

- 문제가 내 현실에 가까울수록 공부는 즐겁고 유용하다
- 문제가 현실과 멀거나 이상에 가까울 수록 공부는 짐이되고 버겁다
- 자주 내가한 공부의 효용성을 증명하고 경험하면 공부가 즐거워진다 

## 프로젝트의 동기

- 2010년 생활코딩 처음 시작했을 때의 상황 소개 
- HD급 화질을 무료로 공유할 수 있는 유튜브 같은 플랫폼이 생겨서,
- 얇은 글씨를 화면에 담을 수 있게 됐다. 온라인 수업이 가능해졌다. 
- 혁명 

## 기획

- 만들기 전에 무엇을 만들것인가를 그려보는 과정을 기획이라고 함. 
- 이 강의의 결과물 웹 페이지의 기획안(제목있고, 목차있고, 컨테츠 뜨고)

## 코딩과 HTML

- HTML 소개 

## HTML 코딩 실습 환경 준비 

- vscode 설치 
- html 파일 생성 및 웹 브라우저에서 열어보기 

## 기본 문법 - 태그 

- `<strong></strong>` : bold체 
- `<u></u>` : 밑줄(underline) 
- FAQ. 한글이 깨지면 어떻게 해야 되나요?
- `<meta charset="utf-8">` 추가 : 파일을 저장하면 utf-8로 저장이되기 때문에 브라우저에게 UTF-8로 열라고 하는 것

## 혁명적인 변화 

- 모르는 태그 알아보기 해봄, 다 외울 필요없이 검색이 있다.
`<h1></h1>` : 제목(headings), <h1> ~ <h6> 


## 통계에 기반한 학습 

- 밑천으로써 외우고 있을만한 태그 : advancedwebranking.com/html/

## 줄바꿈

- `<br>` 줄바꿈 
- `<p></p>` 단락 구분
- `<p style="margin-top:45px;">` CSS, 정해진 간격을 띄우는 단락 간 여백을 정교하게 조작 

## HTML이 중요한 이유

- 기초는 중요하다 
- `<h1>` 태그를 이용해서 제목으로 설정한 경우 vs 일반 글을 꾸며서 제목처럼 보이게 한 경우 
- 검색 엔진에서의 우선순위가 다름 

## 최후의 문법 속성과 img

- 속성(attribute): tag가 tag명 만으로는 정보가 부족할 때, 추가해줌
`<img src="이미지주소" width="100%">`

## 부모 자식과 목록

- `<parent>
  <child>
  </child>
</parent>`

- `<li></li>` 목록(list) 태그 
- `<ul></ul>` (unordered list)목록들 간 구분지어주는 부모태그, 안 쓰면 목록이 쭉 이어지겠지? 그렇다고 줄바꿈은 짜침
- `<ol></ol>` 숫자 목록(ordered list) 

-  목록은 2대가 같이 다님 
- `<ul><li></li></ul>`

- 테이블은 3대가 같이 다님
- `<table><tr><td></td></tr></table>`

## 문서의 구조와 슈퍼스타들

- `<title></title>` 웹 페이지 제목(창)
- `<head></head>` 해당 페이지를 설명하는 부분, 안에 title 등의 정보가 들어간다. 
- `<body></body>` 본문 부분 
- `<html></html>` 해당 html 문서 전체를 감쌈
- `<!doctype html>` 이 문서는 html이다 

## HTML 태그의 제왕 

- `<a></a>` anchor 정보의 바닥에 닻을 내린다, 링크를 의미함 
- `<a href="링크 주소" target="_blank" title="툴팁설명"></a>`
> href : hyper reference <br>
> target="_blank" : 새창으로 열기 

## 웹 사이트 완성

- WEB, HTML/CSS/JS 4 페이지로 구성된 웹사이트 완성(1.html ~ 3.html, index.html)

## 원시웹

- 웹의 역사 

## 인터넷을 여는 열쇠: 서버와 클라이언트 

- 서버/클라이언트 등의 개념 
- 웹 호스팅(대행업체)/웹 서버(직접구현): 서버를 구현하는 두 가지 방법. 

## 웹 호스팅 github pages

- 깃허브 리포지터리 settings - pages - 웹 사이트 생성 - action에서 진행상황 실시간 확인 가능 

## 웹서버 운영하기 

- 웹서버 제품군: Apache, IIS, Nginx, Live Server(VScode extension)
> http://127.0.0.1:5500/index.html
-   
  - http: Hyper Text Transfer Protocol 
  - 127.0.0.1: 내 컴퓨터를 가르키는 IP(Internet Protocol) Adress
  - 5500: Port 번호; 하나의 컴퓨터에 여러개의 서버가 동작하고 있을 때, 서버 지정해줌 

- 서버 컴퓨터 - 클라이언트 컴퓨터(폰) 통신: 같은 WIFI에 연결돼있어야 함 

## 수업을 마치며 1

- 교양을 위한 수업은 여기까지면 된다 bye

## 수업을 마치며 2

- 지금까지 배운 것은 기본적인 것이지만 이 조합으로 대부분의 기능을 만들어낼 수 있다. 
내 인생에 중요한 내용을 웹 페이지로 만들어보면 욕심이 생기는 부분이 추가 공부할 부분이다. 

## 수업을 마치며 3

- 웹 페이지 꾸미기 - WEB2 CSS
- 사용자와 상호작용 - WEB2 JS  (프론트엔드)
- 서버 관리 비요휼 해결 - WEB2 PHP, JSP, Node.js, Django, RubyOnRails, ... (백엔드)
- 웹 페이지에 광고 수익 - WEB2 Advertisement

## 부록 : 코드의 힘  
 




