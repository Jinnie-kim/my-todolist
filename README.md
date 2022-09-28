> # my todolist 🗒

> ## 프로젝트 소개

나의 할 일을 관리할 수 있는 웹서비스입니다.
<br />
todo를 작성 ∙ 수정 ∙ 삭제할 수 있습니다.

> ## 적용한 라이브러리

- React
- Axios
- Styled-component
- Styled-reset

> ## 설치 및 실행

```shell
// 프로젝트 실행

cd todo

npm i install

npm start
```

```shell
// 서버 실행 (제공된 서버를 사용했습니다.)

cd server

yarn start # http://localhost:8080
```

> ## 최종 구현 화면

|                                                            회원가입                                                            |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/192738770-073b5eed-33a0-458b-ad74-c05326ab95c2.gif" width="500"/> |

|                                                             로그인                                                             |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/192739227-7c8893f1-2248-4582-acf0-285c05bdd2d2.gif" width="500"/> |

|                                                         Todo 작성하기                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/192740055-433b8d1f-2238-4028-af14-d7d58f06cf32.gif" width="500"/> |

|                                                         Todo 수정하기                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/192740423-6ee2ee74-b97b-41ad-a03e-2b567416983c.gif" width="500"/> |

|                                                         Todo 삭제하기                                                          |
| :----------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/92916958/192740755-46f01b6d-618c-4e53-aa30-11b760483dc3.gif" width="500"/> |

> ## 트러블 슈팅

|        주제         |                                                                                                                                  해결 과정 로그                                                                                                                                  |
| :-----------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      유저 인증      | <a href="https://velog.io/@kimconut/Context-api%EC%93%B0%EA%B3%A0-%EC%83%88%EB%A1%9C%EA%B3%A0%EC%B9%A8-%ED%9B%84-%EC%B4%88%EA%B8%B0%ED%99%94-%EB%90%98%EB%8A%94-%EB%AC%B8%EC%A0%9C-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B8%B0">Context api 사용해서 새로고침 후 유저 인증 유지하기</a> |
|    데이터 정합성    |                       <a href="https://velog.io/@kimconut/todo-%EC%9E%91%EC%84%B1-%ED%9B%84-%EC%82%AD%EC%A0%9C-%ED%9B%84-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%95%ED%95%A9%EC%84%B1-%EA%B0%96%EC%B6%94%EA%B8%B0">todo 작성, 삭제 후 데이터 정합성 갖추기</a>                        |
|     axios 요청      |                                                                 <a href="https://velog.io/@kimconut/Promise-fulfilled-but-PromiseResult-is-undefined">Promise fulfilled, but PromiseResult is undefined??😨</a>                                                                  |
|  예상 치 못한 액션  |                                    <a href="https://velog.io/@kimconut/todo-%EC%88%98%EC%A0%95%EC%9D%84-%EC%B7%A8%EC%86%8C%ED%95%B4%EB%8F%84-%EC%88%98%EC%A0%95%EC%9D%B4-%EB%90%98%EB%8B%A4%EB%8B%88">todo 수정을 취소해도 수정이 된다?!</a>                                     |
| 예상 치 못한 액션 2 |                                               <a href="https://velog.io/@kimconut/%ED%95%9C-%EB%B0%95%EC%9E%90-%EB%8A%90%EB%A6%B0-todo-title%EC%9D%98-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8">한 박자 느린 todo title의 업데이트</a>                                               |

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

- context -> store <br />
  - 프로젝트 전역에서 사용할 context를 가지고 있는 폴더를 처음에는 `context` 라고 했는데, 관례를 따라 `store`로 변경했다.
- hooks -> todos <br />
  - 커스텀 훅들을 모아둔 폴더라 hooks라고 했는데 todo에 관련한 axios요청 커스텀 훅들이 들어있는 폴더라서 todos로 변경했다. 나중에 api폴더 안으로 넣었다.

2. 관련 있는 폴더 합치기 <br />

- 백엔드 서버와 REST API 연동을 위해 만든 폴더는 auth폴더와 todos폴더이다. 폴더들이 따로 놓여있는데, 관련 있는 폴더끼리 묶어놓기 위해 상위 api폴더를 만들고 그 안에 auth와 todos 폴더를 넣었다.

> ## 폴더 구조

|    폴더    |                         용도                          |
| :--------: | :---------------------------------------------------: |
|    api     |  백엔드 서버와 REST API통신을 위한 Axios custom hook  |
|   pages    |             라우트 별로 UI 컴포넌트 작성              |
|   store    |      프로젝트 전역에서 사용할 기본 context 작성       |
| components | 프로젝트 전역에서 재 사용할 수 있는 components를 작성 |

> ## 배운 점 & 아쉬운 점 & 추가하면 좋을 점

### 배운 점

### 아쉬운 점

### 추가하면 좋을 점

> ## 프로젝트를 진행하면서 찾아낸 공부가 필요한 부분

- async await, promise 비동기
