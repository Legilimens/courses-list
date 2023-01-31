import '@/styles/globals.css';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600'],
});

type TProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: TProps) => {
  return (
    <html lang="ru" className={inter.className}>
      <head />
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
