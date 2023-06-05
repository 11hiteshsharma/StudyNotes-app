import Head from "next/head";
import HomePage from "@/components/Home";
import { BlogData } from "@/database/blogcard";
export default function Home() {
  const data = BlogData;
  return (
    <>
      <main>
        <HomePage data={data} />
      </main>
    </>
  );
}
