import Footer from "./Footer";
import Navbar from "./Navbar";

import Head from "next/head"

export default function Layout({children}) {
    return (
      <>
      <Head>
        <link rel="shortcut icon" href="/images/Pokeball.ico" />
        <title>PokeLand</title>
      </Head>
        <Navbar/>
        <main className="main-container">{children}</main>
        <Footer/>
      </>
    );
  }
  