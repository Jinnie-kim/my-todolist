import { createContext, useReducer } from 'react';

// context 객체 생성
const GlobalContext = createContext();

const globalReducer = (state, action) => {
  switch (action.type) {
    case 'detail':
      return { ...state, id: action.payload };
    default:
      return state;
  }
};

// context를 구독할 컴포넌트의 범위를 설정
const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    token: null,
    id: null,
  });

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalContextProvider };