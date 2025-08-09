import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsApp'; // 👈 WhatsApp иконка компоненті
import { Apple, Icon, icons } from 'lucide-react';

export const metadata = {
  title: 'KhanMedia.kz',
  description: "Khan's website",
  icons: {
    icon: '/favicon.ico'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton /> {/* 👈 Иконка барлық бетте көрінеді */}
      </body>
    </html>
  );
}
