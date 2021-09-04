import { useEffect } from 'react';

const useStyle = (url) => {
  useEffect(() => {
    const style = document.createElement('link');

    style.rel = 'stylesheet';
    style.href = url;
    style.type = 'text/css';

    document.body.appendChild(style);

    return () => {
      document.body.removeChild(style);
    };
  }, [url]);
};

export default useStyle;
