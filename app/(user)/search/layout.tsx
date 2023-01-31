import { ReactNode } from 'react';

import SearchComponent from '@/app/(user)/search/SearchComponent';

import cx from './index.module.css';

type TProps = {
  children: ReactNode;
};

const Layout = ({ children }: TProps) => {
  return (
    <main className={cx.flex}>
      <div>
        <h1 className={cx.h1}>Поиск</h1>
      </div>
      <div className={cx.flex}>
        <SearchComponent />
        <div className={cx.children}>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
