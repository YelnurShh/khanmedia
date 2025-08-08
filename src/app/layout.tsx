import './globals.css';
import Header from '@/components/Header'; // 👈 жолды қос
import Footer from '@/components/Footer';

export const metadata = {
  title: 'KhanMedia.kz',
  description: "Khan's website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header /> {/* 👈 Header компоненті */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
