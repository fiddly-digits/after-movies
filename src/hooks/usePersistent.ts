import { useState, useEffect } from 'react';

function usePersistent(
  initialState: number,
  key: string
): [number, React.Dispatch<React.SetStateAction<number>>, () => void] {
  const [state, setState] = useState(() => {
    const savedState = localStorage.getItem(key);
    return savedState !== null ? Number(savedState) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, String(state));
  }, [key, state]);

  const reset = () => {
    localStorage.removeItem(key);
    setState(initialState);
  };

  return [state, setState, reset];
}

export default usePersistent;
