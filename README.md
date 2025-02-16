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
   프론트엔드 앱은 **Node.js**를 사용하므로 먼저 Node.js가 설치되어 있어야 합니다. [Node.js 공식 웹사이트](https://nodejs.org/)에서 다운로드 후 설치하세요.

2. **의존성 설치**  
   프로젝트 디렉터리로 이동하여 아래 명령어를 실행합니다:
   ```bash
   cd frontend
   npm install


