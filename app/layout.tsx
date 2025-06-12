// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/home/Container';
import Providers from './providers';
import UserIcon from '@/components/navbar/UserIcon';
import { auth } from '@clerk/nextjs/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Storefront',
  description: 'A nifty store built with Next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   const { userId } = auth(); 
  const isAdmin = userId === process.env.ADMIN_USER_ID; 

  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className} suppressHydrationWarning>
          <Providers>
            <Navbar userIconSlot={<UserIcon />} isAdmin={isAdmin}/>
            <Container className='py-20'>
              {children}
            </Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}



