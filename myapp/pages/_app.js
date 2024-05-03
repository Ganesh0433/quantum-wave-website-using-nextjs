import "@/styles/globals.css";
import Navbar from './components/navbar'
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return(
    <>
    <Navbar/>
    <Component {...pageProps} />;
    </>
    
  )
}
