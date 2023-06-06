import Head from "next/head";
import HomePage from "@/components/Home";
import { BlogData } from "@/database/Blogcard";
import {NotesData} from "@/database/Notescard";
export default function Home() {
  const data = BlogData;
  const notes = NotesData;
  return (
    <>
      <main>
        <HomePage data={data} notes={notes} />
      </main>
    </>
  );
}
