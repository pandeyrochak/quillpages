import { ThemeContextProvider } from 'src/Context/ThemeContext';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from 'src/Provider/ThemeProvider';
import AuthProvider from 'src/Provider/AuthProvider';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Quillpages',
  description: 'The best blog app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <div className="container navbar">
                <div className="wrapper">
                  <Navbar />
                </div>
              </div>
              <div className="container">
                <div className="wrapper">
                  {children}
                  <Footer />
                </div>
              </div>
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
