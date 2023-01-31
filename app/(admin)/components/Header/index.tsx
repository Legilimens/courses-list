import Link from 'next/link';

import cx from './index.module.css';

const Header = () => {
  return (
    <header className={cx.header}>
      <p className={cx.text}>Header of admin panel</p>
      <div className={cx.navigation}>
        <Link href="/">Home</Link>
        <Link href="/todos">Todos</Link>
        <Link href="/search">Search</Link>
      </div>
    </header>
  );
};

export default Header;
