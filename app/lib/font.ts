import { Inter, Lusitana, Poppins, DM_Sans } from 'next/font/google';

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})
export const dmsans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
})
export const inter = Inter({ 
  subsets: ['latin'] 
});
export const lusitana = Lusitana({ 
  weight: ['400', '700'], 
  subsets: ['latin'], 
});