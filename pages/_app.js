import "@/styles/globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<div className={raleway.className}>
			<NavBar />
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}
