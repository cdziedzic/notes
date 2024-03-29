import Link from "next/link";
import '../globals.css'

async function getNotes() {
    const res = await fetch('http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30', { cache: 'no-store' })
    const data = await res.json()
    return data?.items ?? []
}

export default async function NotesPage() {
    const notes = await getNotes();
    console.log(notes)


    return (
        <div>
            <h1>Notes</h1>
            {notes?.map((note) => {
                return <Note key={note._id} note={note} />;
            })}
            <p>Here are my notes</p>
        </div>
    );
}

function Note({ note }) {
    const { id, title, content, created } = note || {}

    return (
        <Link href={`/notes/${id}`}>
        <div>
            <h2>{title}</h2>
            <h5>{content}</h5>
            <p>{created}</p>
        </div>
        </Link>
    );
}