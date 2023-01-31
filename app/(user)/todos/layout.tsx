/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ReactNode } from 'react';

import TodoList from '@/app/(user)/todos/TodoList';

import cx from './index.module.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={cx.wrapper}>
      <div>
        {/* @ts-ignore */}
        <TodoList />
      </div>
      <div className={cx.children}>{children}</div>
    </div>
  );
};

export default Layout;
