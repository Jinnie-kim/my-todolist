# my todolist 🗒

> ## 프로젝트 소개

CRUD기능을 구현한 할 일 관리 웹서비스입니다.
<br />
todo를 작성 ∙ 수정 ∙ 삭제할 수 있습니다.

> ## 적용한 라이브러리

- React
- ReactRouter
  
  - Client side routing을 구현하기 위해 사용했습니다.
- Axios
  
  - 데이터 요청 시 JSON 데이터 자동변환 기능을 쓰려고 사용했습니다.
- Styled-component
  
  - UI 컴포넌트를 스타일링하기 위해 사용했습니다. 
- Styled-reset

  - UI 컴포넌트들의 기본 스타일 속성을 제거해주기 위해 사용했습니다.

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

> ## 배운 점 & 아쉬운 점 & 개선하고 싶은 점

### 배운 점🙋🏻‍♀️
1. 남 코드 이해력 상승
- 이번 프로젝트를 하면서 같은 프로젝트를 만든 다른 사람들의 깃허브를 많이 봤다. <br />전에는 다른 사람들의 코드를 이해할 수가 없었는데 이젠 이해가 된다. 
2. useReducer와 Context API를 완벽히 내 것으로
 - 내가 배운 리액트 hook들 중에 제일 어렵고 이해하는데 오래 걸린 것들이다.<br />
처음 썼을 때는 진짜 이해도 못하고 그냥 따라 치기만 했는데, 이번 TodoList에 직접 적용해보면서 완벽히 이해했다.
3. 개발을 하는 태도
- 요구된 기능이나 만들어야지 마음먹은 기능을 구현해내면 잘했다고 넘어가는 태도에서 계속 같은 코드를 좀 더 깔끔하게 좀 더 효율적으로 변경해가는 방법을 고민하게 되었다.
### 아쉬운 점🙍🏻‍♀️
1. 내가 가진 지식 속에서 방법을 찾아내고 구글링을 하며 새로운 방법을 알아가는 과정이 꽤나 힘들어서 막힐 때마다, 대체 왜 이렇게 동작하는지 모를 때마다 답을 찾는 과정이 힘들어서 지쳤던 점. (하지만 답을 찾고 완성해냈다.)
### 개선하고 싶은 점🙆🏻‍♀️
1. TypeScript 적용하기
2. useParams를 이용해 todo를 클릭할 때마다 개별 todo에 개별 주소 부여해주기 <br />(뒤로 가기 하면 이전 todo 조회 가능)
3. todo에 관련된 axios요청을 각 기능별로 여러 파일로 만들었는데 하나의 파일로 만들기
  -  요청 로직도 UI 컴포넌트에서 완전히 분리하여 데이터만 받아올 수 있도록

> ## 프로젝트를 진행하면서 찾아낸 공부가 필요한 부분

- async await, promise 비동기 파트의 공부가 부족하다. <br />
기본 개념부터 심화까지 자바스크립트 비동기 공부를 해야겠다
