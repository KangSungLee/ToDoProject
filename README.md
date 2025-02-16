ToDo App

프로젝트 개요

이 프로젝트는 React와 Spring Boot를 활용하여 개발한 일정 관리 웹 애플리케이션입니다. 사용자는 할 일을 추가, 수정, 삭제할 수 있으며, 우선순위와 상태를 설정할 수 있습니다. 또한, 캘린더를 통해 일정 관리를 보다 직관적으로 할 수 있습니다.

주요 기능

1. 회원 관리

로그인 및 회원가입 기능

JWT 토큰을 활용한 인증 및 권한 관리

2. 할 일 관리

할 일 추가, 수정, 삭제

우선순위(낮음, 보통, 높음) 설정

상태(대기, 진행 중, 완료) 변경

카테고리 선택 기능

3. 캘린더 연동

날짜별 일정 표시

일정 클릭 시 상세 정보 조회 및 수정 가능

4. UI/UX

React-Bootstrap을 활용한 반응형 디자인

모달을 활용한 일정 추가 및 수정

DatePicker를 통한 날짜 및 시간 선택 기능 제공

기술 스택

프론트엔드

React

React Router

React-Bootstrap

Axios

React-DatePicker

백엔드

Java (Spring Boot)

Spring Security (JWT 인증)

MyBatis (데이터베이스 연동)

MySQL

배포 및 운영

AWS EC2 (서버 배포)

AWS RDS (MySQL 데이터베이스)

Nginx (Reverse Proxy)

프로젝트 실행 방법

1. 백엔드 실행

cd backend
./mvnw spring-boot:run

2. 프론트엔드 실행

cd frontend
npm install
npm start

API 명세

HTTP Method

Endpoint

기능

GET

/api/todos

사용자의 할 일 목록 조회

POST

/api/todos

새로운 할 일 추가

PUT

/api/todos/{id}

기존 할 일 수정

DELETE

/api/todos/{id}

할 일 삭제

프로젝트 구조

project-root/
 ├── backend/
 │   ├── src/main/java/com/example/todo/
 │   │   ├── controller/ (API 컨트롤러)
 │   │   ├── service/ (비즈니스 로직)
 │   │   ├── repository/ (데이터 액세스)
 │   │   ├── entity/ (데이터 모델)
 │   │   ├── config/ (설정 파일)
 │   ├── resources/ (설정 및 SQL 파일)
 │   ├── pom.xml
 │
 ├── frontend/
 │   ├── src/
 │   │   ├── components/ (공통 UI 컴포넌트)
 │   │   ├── pages/ (화면 단위 컴포넌트)
 │   │   ├── services/ (API 호출 로직)
 │   │   ├── App.js
 │   ├── package.json
 │
 ├── README.md

개발자 노트

API 호출 시 JWT 토큰을 활용하여 보안 강화

캘린더 기능을 추가하여 일정 관리의 직관성을 높임

UI/UX를 개선하여 사용자 경험을 고려한 인터페이스 구현

향후 개선 사항

다크 모드 지원

Drag & Drop을 활용한 할 일 순서 변경

더 많은 알림 기능 추가

