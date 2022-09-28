> # my todolist 🗒

> ## 프로젝트 소개

> ## 적용한 라이브러리 

> ## 설치 및 실행

```shell
// 프로젝트 실행

cd todo

npm i install

npm start
```

```shell
// 서버 실행 

cd server

yarn start # http://localhost:8080
```

> ## 최종 구현 화면
|회원가입|
|:--:|
||

|로그인|
|:--:|
||

|Todo 작성하기|
|:--:|
||

|Todo 수정하기|
|:--:|
||

|Todo 삭제하기|
|:--:|
||

> ## 트러블 슈팅

표로 만들고 왼쪽에 제목 오른쪽에 벨로그 주소 링크 첨부

> ## 과제 구현 사항

### Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요

  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [ ] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요

  ### Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.
  - [x] 새로고침을 했을 때 현재 상태가 유지되어야 합니다.
  - [ ] 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요

  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

> ## 프로젝트 구조

```
🐣 변경 전 🐣
my-todolist
├─ .DS_Store
└─ myTodolist
   ├─ README.md
   ├─ server
   │  ├─ README.md
   │  ├─ ... 생략
   └─ todo
      ├─ package-lock.json
      ├─ package.json
      ├─ public
      │  └─ index.html
      └─ src
         ├─ App.js
         ├─ auth
         │  ├─ useJoin.jsx
         │  └─ useLogin.jsx
         ├─ components
         │  └─ Nav.jsx
         ├─ hooks
         │  └─ useCreateTodo.jsx
         │  └─ useDeleteTodo.jsx
	     │  └─ useEditTodo.jsx
         │  └─ useGetTodoDetail.jsx
         │  └─ useGetTodoTitle.jsx
         │  └─ useGlobalContext.jsx
         ├─ context
         │  └─ globalContext.jsx
         ├─ index.js
         └─ pages
            ├─ Home
            │  ├─ Home.jsx
            │  ├─ TodoDetail.jsx
            │  ├─ TodoForm.jsx
            │  ├─ TodoSection.jsx
            │  └─ TodoTitle.jsx
            ├─ Join
            │  └─ Join.jsx
            └─ Login
               └─ Login.jsx

🐥 변경 후 🐥
my-todolist
├─ .DS_Store
└─ myTodolist
   ├─ README.md
   ├─ server
   │  ├─ README.md
   │  ├─ ... 생략
   └─ todo
      ├─ package-lock.json
      ├─ package.json
      ├─ public
      │  └─ index.html
      └─ src
         ├─ App.js
         ├─ api
         │  ├─ auth
         │  │  ├─ useJoin.jsx
         │  │  └─ useLogin.jsx
         │  └─ todos
         │     ├─ useCreateTodo.jsx
         │     ├─ useDeleteTodo.jsx
         │     ├─ useEditTodo.jsx
         │     ├─ useGetTodoDetail.jsx
         │     ├─ useGetTodoTitle.jsx
         │     └─ useGlobalContext.jsx
         ├─ components
         │  └─ Nav.jsx
         ├─ index.js
         ├─ pages
         │  ├─ Home
         │  │  ├─ Home.jsx
         │  │  ├─ TodoDetail.jsx
         │  │  ├─ TodoForm.jsx
         │  │  ├─ TodoSection.jsx
         │  │  └─ TodoTitle.jsx
         │  ├─ Join
         │  │  └─ Join.jsx
         │  └─ Login
         │     └─ Login.jsx
         └─ store
            └─ globalContext.jsx
```

### 변경된 내용 소개 🐣 → 🐥
1. 폴더 이름을 좀 더 직관적인 이름으로 변경
  - context -> store
  <br />
    프로젝트 전역에서 사용할 context를 가지고 있는 폴더를 처음에는 `context` 라고 했는데, 관례를 따라 `store`로 변경했다.
  - hooks -> todos
  <br />
  커스텀 훅들을 모아둔 폴더라 hooks라고 했는데 todo에 관련한 axios요청 커스텀 훅들이 들어있는 폴더라서 todos로 변경했다. 나중에 api폴더 안으로 넣었다.
2. 관련 있는 폴더 합치기 
  - 백엔드 서버와 REST API 연동을 위해 만든 폴더는 auth폴더와 todos폴더이다. 폴더들이 따로 놓여있는데, 관련 있는 폴더끼리 묶어놓기 위해 상위 api폴더를 만들고 그 안에 auth와 todos 폴더를 넣었다. 

> ## 폴더 구조

|     폴더      |                         용도                          |
| :-----------: | :---------------------------------------------------: |
| api(or hooks) |    백엔드 서버와 REST API통신을 위한 Axios 코드,,,    |
|     pages     |             라우트 별로 UI 컴포넌트 작성              |
|     store     |      프로젝트 전역에서 사용할 기본 context 작성       |
|  components   | 프로젝트 전역에서 재 사용할 수 있는 components를 작성 |

> ## 배운 점 & 아쉬운 점 & 추가하면 좋을 점

### 배운 점
### 아쉬운 점
### 추가하면 좋을 점


> ## 프로젝트를 진행하면서 찾아낸 공부가 필요한 부분

- async await, promise 비동기