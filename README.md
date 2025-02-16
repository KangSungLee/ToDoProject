# 📌 To-Do List Web App

이 프로젝트는 **React**와 **Spring Boot**를 사용하여 만든 **To-Do List 웹 애플리케이션**입니다. 사용자는 **일정을 추가, 수정, 삭제**할 수 있으며, **카테고리 및 우선순위 설정, 상태 변경** 등의 기능을 제공합니다.

---

## 🛠 기술 스택

### 📌 Frontend
- **React**
- **React Router**
- **Bootstrap**
- **React DatePicker**
- **FullCalendar**

### 📌 Backend
- **Spring Boot**
- **MyBatis**
- **MySQL**
- **Lombok**
- **JWT**

---

## 🚀 주요 기능

### ✅ 할 일 관리
- 일정 추가, 수정, 삭제
- 일정 상태 변경 (`PENDING` → `IN_PROGRESS` → `COMPLETED`)

### 📅 캘린더 연동
- **FullCalendar**를 이용하여 일정 표시
- 날짜 클릭 시 할 일 추가 가능
- 일정 클릭 시 상세 정보 확인 및 수정 가능

### 🔖 카테고리 및 우선순위 설정
- 일정별 **카테고리 선택** (예: 업무, 개인, 공부 등)
- **우선순위 설정** (`LOW`, `MEDIUM`, `HIGH`)

### 🔒 사용자 인증
- **JWT** 기반 로그인 및 회원가입 기능
- 로그인 상태 유지 (LocalStorage 활용)
- 인증되지 않은 사용자는 로그인 페이지로 리디렉트

---

## 📂 폴더 구조

```bash
📦 project-root
├── 📂 frontend  # React 앱
│   ├── 📂 src
│   │   ├── 📂 components   # UI 컴포넌트
│   │   ├── 📂 pages        # 페이지 컴포넌트
│   │   ├── 📂 routes       # 라우팅 설정
│   │   ├── 📂 services     # API 요청
│   │   ├── 📂 styles       # 스타일 파일
│   │   ├── 📂 utils        # 유틸리티
│   │   ├── App.js
│   │   ├── index.js
├── 📂 backend  # Spring Boot 서버
│   ├── 📂 src/main/java/com/example/todo
│   │   ├── 📂 config      # 설정 파일
│   │   ├── 📂 controller  # API 컨트롤러
│   │   ├── 📂 dao         # 데이터베이스 접근
│   │   ├── 📂 dto         # 데이터 전송 객체
│   │   ├── 📂 entity      # 엔터티 클래스
│   │   ├── 📂 security    # 보안 관련 설정
│   │   ├── 📂 service     # 비즈니스 로직
│   │   ├── Application.java
└── README.md
```

---

## 🛠 소스 빌드 및 실행 방법

### 1️⃣ 프론트엔드 실행

1. **Node.js 설치**
2. **의존성 설치**
   ```bash
   cd ToDoProject-main/src/main/resources/todo
   npm install
   ```
3. **프론트엔드 실행**
   ```bash
   npm start
   ```

### 2️⃣ 백엔드 실행

1. **Java 17 이상 설치**
2. **백엔드 실행**
   ```bash
   cd ToDoProject-main
   java -jar ToDo-0.0.1-SNAPSHOT.jar
   ```
   🔹 *JAR 파일이 없을 경우, 메일 첨부된 JAR 파일을 실행하세요.*

### 3️⃣ 데이터베이스 설정

1. **MySQL 설치**
2. **데이터베이스 생성**
   ```sql
   source toDB.sql;
   ```

---

## 📌 주요 컴포넌트

### 🔹 ToDoPage 컴포넌트
ToDoPage는 사용자가 할 일을 관리하는 페이지로, 할 일 목록을 보여주고 **추가, 수정, 삭제**할 수 있습니다.

- API 호출: `getTodos`, `addTodo`, `updateTodo`, `deleteTodo`
- 동적 목록 표시 및 수정 기능 제공

### 🔹 AppRoutes 컴포넌트
AppRoutes는 애플리케이션 내의 **라우팅을 관리**하는 컴포넌트입니다.

- `Routes`와 `Route`를 사용하여 페이지 이동을 제어
- 로그인, 회원가입, 할 일 관리 페이지 등을 쉽게 탐색 가능

---

## 📌 주요 라이브러리

### 🔹 Lombok
반복적인 getter, setter, toString 등의 메서드를 자동 생성하여 **코드 가독성을 높이고 반복 코드를 줄이는** 라이브러리입니다.

### 🔹 JWT
- 클라이언트-서버 간 안전한 인증 처리
- 매 요청마다 사용자 인증을 확인할 필요 없이 JWT 토큰을 이용하여 인증 수행

---

## 📌 API 명세 & 테스트 케이스

### 📌 API 명세서
![API 명세](https://github.com/user-attachments/assets/2309c0a6-c93e-4138-aef5-cc2d99f2c8f5)

### 📌 테스트 케이스
![테스트 케이스](https://github.com/user-attachments/assets/735ba13d-0f81-4dcb-a8c9-4a344a76eeab)

