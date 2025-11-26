import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsApp';
import { Montserrat } from "next/font/google";  // 👈 Шрифт импорт

export const metadata = {
  title: 'KhanMedia',
  icons: {
    icon: '/favicon.ico'
  }
};

// 👇 Montserrat қосамыз
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-main"   // CSS өзгермелі
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={montserrat.variable}>
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
