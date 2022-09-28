import { createContext, useReducer } from 'react';

// context 객체 생성
const GlobalContext = createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'detail':
      return { ...state, id: action.payload };
    case 'login':
      return { ...state, token: action.payload };
    case 'logout':
      return { ...state, token: action.paylod };
    case 'create':
      return { ...state, create: action.payload };
    case 'delete':
      return { ...state, id: action.paylod };
    case 'edit':
      return { ...state, edit: action.payload };
    default:
      return state;
  }
};

// context를 구독할 컴포넌트의 범위를 설정
const GlobalContextProvider = ({ children }) => {
  const initialToken = localStorage.getItem('token');
  const [state, dispatch] = useReducer(globalReducer, {
    token: initialToken,
    id: null,
    create: null,
    edit: 0,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };
