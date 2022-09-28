import { useContext } from 'react';
import { GlobalContext } from '../store/globalContext';

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  return context;
};
