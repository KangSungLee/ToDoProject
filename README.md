# 📌 To-Do List Web App

이 프로젝트는 **React**와 **Spring Boot**를 사용하여 만든 **To-Do List 웹 애플리케이션**입니다.  
사용자는 **일정을 추가, 수정, 삭제**할 수 있으며, **카테고리 및 우선순위 설정, 상태 변경** 등의 기능을 제공합니다.

## 🛠 기술 스택

- **Frontend**: React, React Router, Bootstrap, React DatePicker
- **Backend**: Spring Boot, MyBatis, MySQL

## 🚀 주요 기능

### ✅ 할 일 관리
- 새로운 일정 추가
- 기존 일정 수정 및 삭제
- 일정 상태 변경 (예: `PENDING` → `IN_PROGRESS` → `COMPLETED`)

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
│   └── ...
├── 📂 backend  # Spring Boot 서버
│   ├── 📂 src/main/java/com/example/to
│   │   ├── 📂 config      # 설정 파일
│   │   ├── 📂 controller  # API 컨트롤러
│   │   ├── 📂 dao         # 데이터베이스 접근
│   │   ├── 📂 dto         # 데이터 전송 객체
│   │   ├── 📂 entity      # 엔터티 클래스
│   │   ├── 📂 security    # 보안 관련 설정
│   │   ├── 📂 service     # 비즈니스 로직
│   │   ├── Application.java
│   └── ...
└── README.md

## 🛠 소스 빌드 및 실행 방법

### 1. 프론트엔드 실행

1. **Node.js 설치**  
   프론트엔드 앱은 **Node.js**를 사용하므로 먼저 Node.js가 설치되어 있어야 합니다.

2. **의존성 설치**  
   프로젝트 디렉터리로 이동하여 아래 명령어를 실행합니다: 
   cd ToDoProject-main/src/main/resources/todo
   npm install

2. **프론트엔드 실행**  
   다음 명령어를 실행하여 React 앱을 실행합니다:
   npm start

### 2. 백엔드 실행

1. **Java 설치**  
   백엔드는 Spring Boot로 작성되어 있으므로 Java 17 이상이 필요합니다. 

2. **백엔드 실행**  
   프로젝트 디렉터리로 이동하여 아래 명령어를 실행합니다: 
   cd ToDoProject-main
   java -jar ToDo-0.0.1-SNAPSHOT.jar
   jar파일이 존재하지 않을 시 메일에 첨부된 jar파일 실행 (빌더파일이 깃허브에 용량문제로 업로드 되지 않아 메일에 추가 첨부했습니다.)

### 3. 데이터베이스 설정

1. **MySQL 설치**  
   프로젝트는 MySQL을 사용하여 데이터베이스를 설정합니다.

2. **데이터베이스 생성**  
   프로젝트 폴더에 toDB.sql를 실행하면 데이터베이스가 생성됩니다.

## 주력으로 사용한 컴포넌트

1. **ToDoPage 컴포넌트**  
   ToDoPage는 사용자가 할 일을 관리하는 페이지로, 할 일 목록을 보여주고, 할 일을 추가, 수정, 삭제할 수 있는 기능을 제공합니다. 이 페이지는 ToDoPage.js에서 정의되며, getTodos, addTodo, updateTodo, deleteTodo와 같은 API 호출 기능을 통해 데이터를 처리합니다. 할 일을 관리하는 핵심적인 기능을 구현하는 페이지로, 사용자가 할 일 목록을 편리하게 관리할 수 있도록 돕기 위해 사용되었습니다. 이 컴포넌트는 사용자 경험을 최적화하기 위해 할 일 목록을 동적으로 표시하고 수정할 수 있는 인터페이스를 제공합니다.

2. **AppRoutes 컴포넌트**  
   AppRoutes는 애플리케이션 내의 라우팅을 관리하는 컴포넌트입니다. Routes와 Route 컴포넌트를 사용하여, ToDoPage, LoginPage, SignupPage 등 다양한 페이지로의 이동을 제어합니다. 애플리케이션의 페이지 간 내비게이션을 효율적으로 처리하기 위해 사용되었습니다. Routes를 사용하여 URL에 따른 컴포넌트 렌더링을 정의함으로써, 사용자가 로그인, 회원가입, 할 일 관리 페이지 등을 쉽게 탐색할 수 있도록 했습니다.

## 주력으로 사용한 라이브러리

1. **Lombok**  
   Java 코드에서 반복적인 getter, setter, toString, hashCode, equals 메서드를 자동으로 생성해주는 라이브러리입니다. Java에서는 이러한 메서드를 수동으로 작성하는 일이 많은데, Lombok을 사용하면 이러한 작업을 자동화하여 코드의 가독성을 높이고, 반복적인 코드를 줄일 수 있습니다.

2. **JWT**  
   클라이언트와 서버 간에 안전하게 정보를 전달할 수 있게 해주며, 서버가 매 요청마다 인증을 확인할 필요 없이 JWT 토큰을 통해 사용자를 식별할 수 있습니다. 이를 통해 애플리케이션의 성능을 높이고, 사용자 인증을 효율적으로 처리할 수 있습니다.

api명세
![image](https://github.com/user-attachments/assets/2309c0a6-c93e-4138-aef5-cc2d99f2c8f5)
테스트케이스
![image](https://github.com/user-attachments/assets/735ba13d-0f81-4dcb-a8c9-4a344a76eeab)

