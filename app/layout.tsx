import './globals.scss';
import Footer from './widgets/Footer/ui/Footer';
import Header from './widgets/Header/ui/Header';
import { Providers } from './Providers';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
