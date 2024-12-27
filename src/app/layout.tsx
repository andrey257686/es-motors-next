import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './styles/globals.css';
import Header from '@/app/components/UI/Header/Header';
import Footer from '@/app/components/UI/Footer/Footer';
import { ModalProvider } from '@/app/context/ModalContext';
import ClientSideToastContainer from '@/app/components/UI/Toast/Toast';

const openSans = Open_Sans({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700', '800'],
  variable: '--font-open-sans',
});

export const metadata: Metadata = {
  title: 'ES Motors',
  description:
    'Качественный сервис по подбору и продаже автозапчастей по всей России',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body aria-hidden="false" id="root" className={`${openSans.variable}`}>
        <ClientSideToastContainer />
        <ModalProvider>
          <Header />
          {children}
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
