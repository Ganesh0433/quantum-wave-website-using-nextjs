import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import about from './about.js'

//import Navbar from "./components/navbar";
import Homepage from "./components/home.js";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>

      </Head>
           <Homepage/>
          
             

    </>
  );
}
