import { useEffect } from 'react';

function useScrollRestoration(route: string) {
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(route);
    if (savedScrollPosition) {
      window.scrollTo(0, Number(savedScrollPosition));
    }

    const scrollListener = () => {
      sessionStorage.setItem(route, String(window.scrollY));
    };
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [route]);
}

export default useScrollRestoration;
