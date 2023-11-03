import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// info can be found here: https://fonts.google.com/specimen/Lustria?query=lustria
// here we see the weight and the subset... latin
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});
