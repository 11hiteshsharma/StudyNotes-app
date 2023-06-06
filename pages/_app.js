import "@/styles/globals.css";
import NavBar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import { Raleway } from "next/font/google";
import Head from "next/head";
const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={raleway.className}>
      <Head>
        <title>
          Access a Vast Repository of Study Materials and Notes on our Website
        </title>
        <meta
          name="description"
          content="Discover a wealth of study materials and notes on our website. From textbooks and lecture notes to practice resources, our comprehensive repository has everything you need to excel in your academic pursuits."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
