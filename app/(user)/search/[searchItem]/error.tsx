'use client';

import { useEffect } from 'react';

type TProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: TProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Что-то пошло не так</h2>
      <button type="button" onClick={() => reset()}>
        Попробовать снова
      </button>
    </div>
  );
};

export default Error;
