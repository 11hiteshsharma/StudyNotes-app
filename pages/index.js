import Head from "next/head";
import HomePage from "@/components/Home";
import { BlogData } from "@/database/Blogcard";
import { NotesData } from "@/database/Notescard";
import { previous_year_question_paper } from "@/database/QusPaperCard";
export default function Home() {
  const data = BlogData;
  const notes = NotesData;
  const quspaper = previous_year_question_paper;
  return (
    <>
      <main>
        <HomePage data={data} notes={notes} quspaper={quspaper} />
      </main>
    </>
  );
}
