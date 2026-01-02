# Webstudy_fastapi# FastAPI 실습 - Youtube 놀자코딩

## 1강: 환경설정 및 간단히 구축
### 실습 디렉토리 생성
- cmd `d: ~~ DEV/250521_fastapi/`
- `dir` 명령어로도 디렉토리 구성확인 가능 

### python 가상환경 
- 생성) `python -m venv .venv`
- 실행) `.venv\Scripts\activate`
- pip 패키지 조회) `pip list`

### fastapi 패키지 설치
- fastapi 설치) `pip install fastapi`
- uvicorn 설치) `pip install uvicorn`
- 현재까지 환경 저장) `pip freeze > requirements.txt`

### VScode로 이동
- main.py 작성 
> main_org.py

### fastapi 실행
- `uvicorn main:app --reload`
> --reload: 소스가 수정됐을 때 자동으로 재실행해줌, 개발 때 자주 사용

### bat 파일로 자동화
- run.bat 생성 
- cmd `run.bat` 으로 실행

### 브라우저에서 실행
- `http://localhost:8000`
- `http://localhost:8000/items/1?q=Hello`
- `http://localhost:8000/docs`
> docs: 스웨거를 이용한 api 문서

## 2강. 라우터(컨트롤러)
- api가 늘어날수록 관리하기 힘들어짐 
- __init__.py 생성
- items.py: 기존 main.py에서 items 관련 app을 router 형식으로 수정
- users.py: 마찬가지

## 3강: DB 연결(PostgreSQL)
- scoop.sh 들어가서 Quickstart 두 줄 powershell 에서 실행하여 설치
- scoop 설치된 경로를 환경변수 PATH에 등록해야됨 
> `C:\Users\User\scoop\shims`
> vscode 내에서 터미널로 열면 초기화가 안돼서 잘 안됨. 외부 파워쉘 열기

### PostgreSQL 설치
- `scoop install Postgresql`
- cmd로 이동
- `pg_ctl start`: 새 창에서 쳐야함, C:, 가상환경 아니어도 됨
- `psql -U postgres`

### 새로운 유저 추가
- `create user test_user with password 'test123';`

### 새로운 DB 추가
- `create database test_db with encoding='utf-8' owner test_user;`

### 데이터베이스 빠져나오기
- `\q`

### 생성한 DB 들어가보기 
- `psql -U test_user -d test_db`

### 테이블 하나 생성하기
- 생성 SQL문
```sql
CREATE TABLE TB_ADMIN
(
  ADMIN_NO Serial NOT NULL,
  LOGIN_ID Varchar(20) NOT NULL UNIQUE,
  PASSWD Varchar(20) NOT NULL,
  NICK Varchar(20) NOT NULL,
  EMAIL Varchar(40),
  PRIMARY KEY (ADMIN_NO)
) Without Oids;
```

### 테이블에 데이터 넣기 
- 두 행 넣기
- `INSERT INTO TB_ADMIN(LOGIN_ID, PASSWD, NICK, EMAIL)`
- `VALUES('honggildong', 'ajtwoddl', 'HONG', 'hgd@gmail.com');`
- `INSERT INTO TB_ADMIN(LOGIN_ID, PASSWD, NICK, EMAIL)`
- `VALUES('jangnara', 'dlQmsdl', 'JANG', 'jnr@gmail.com');`

### 데이터 잘 들어갔는지 조회 
- `select * FROM tb_admin;`

### procedure 작성
```sql
CREATE OR REPLACE PROCEDURE public.SP_L_ADMIN(out1 refcursor)
  LANGUAGE plpgsql
AS $procedure$
  BEGIN
    OPEN out1 FOR
    SELECT ADMIN_NO, LOGIN_ID, PASSWD, NICK, EMAIL FROM TB_ADMIN;
  END;
$procedure$
;
```

### function 작성
```sql
CREATE OR REPLACE FUNCTION public.FN_L_ADMIN(out1 refcursor)
  RETURNS SETOF refcursor
  LANGUAGE plpgsql
AS $function$
  BEGIN
    OPEN out1 FOR
    SELECT ADMIN_NO, LOGIN_ID, PASSWD, NICK, EMAIL FROM TB_ADMIN;
    RETURN NEXT out1;
  END;
$function$
;
```

### 작성한 function이 잘 되는지 확인 
```bash
BEGIN;
SELECT fn_l_admin('out1');
FETCH ALL FROM out1;
CLOSE out1;
COMMIT;
```

### 작성한 procedure가 잘 되는지 확인 
```bash
BEGIN;
CALL sp_l_admin('out1');
FETCH ALL FROM out1;
COMMIT;
```

### 여기까지가 DB 준비 완료

### psycopg
- python에서 PostgreSQL사용하는 패키지
- `pip install "psycopg[binary,pool]"`
- config/ 디렉토리 생성
- __init_.py, config.py 생성&작성 

### mvc 구조
- 웹 프레임워크는 model, view, controller의 구조 
- DB는 model에 해당
- model/ 디렉토리 생성 
- __init__.py, pgsql_test.py 생성&작성
- controller/admins.py 작성 
> user.py와 동일 
- admins.py 추가됨에 따라 main.py에서도 관련 내용 추가