import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}