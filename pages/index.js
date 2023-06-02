import Head from "next/head";
import HomePage from "@/components/Home";
import { BlogData } from "@/database/blogcard";
export default function Home() {
  const data = BlogData;
  return (
    <>
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

      <main>
        <HomePage data={data} />
      </main>
    </>
  );
}
