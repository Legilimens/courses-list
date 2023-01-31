import '@/styles/globals.css';

import Header from 'app/(user)/components/Header';

type TProps = {
  children: React.ReactNode;
};
const RootLayout = ({ children }: TProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
