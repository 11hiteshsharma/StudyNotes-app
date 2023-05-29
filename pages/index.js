import Head from "next/head";
import HomePage from "@/components/Home";

export default function Home() {
	return (
		<>
			<Head>
				<title>Study Material</title>
				<meta name="description" content="Created by ❤" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<HomePage />
			</main>
		</>
	);
}
