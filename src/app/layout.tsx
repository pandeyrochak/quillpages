import { ThemeContextProvider } from 'src/Context/ThemeContext';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import ThemeProvider from 'src/Provider/ThemeProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
