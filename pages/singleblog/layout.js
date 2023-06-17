import React from 'react'
import "@/styles/globals.css";
import NavBar from '@/components/Navbar/navbar';

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
	return (
		<div className={raleway.className}>
            <>
			<NavBar />
            
            </>
			
		</div>
	);
}