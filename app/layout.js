import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Disappointment as a service',
  description:
    ' Disappointment As A Service is here to turn your high hopes into soul-crushing disappointment. We specialize in delivering premium letdowns, dashed dreams, and shattered expectations, right to your doorstep.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
