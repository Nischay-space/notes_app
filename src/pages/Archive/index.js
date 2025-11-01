import { Fragment } from "react/jsx-runtime"
import { Navbar } from "../../components/navbar"
import { Sidebar } from "../../components/sidebar"
import { useNotes } from "../../context/notes-context"
import { NotesCard } from "../../components/NotesCard"

export const Archive = () => {
    const{ archive }=useNotes()
    return (
        <Fragment>
            <Navbar />
            <main className="flex gap-3">
                <Sidebar />
                <div className="flex-1">
                    <div className="flex flex-wrap gap-5 mt-7">
                        {
                            archive?.length > 0 && archive.map(({ id, title, text, isPinned }) => (
                                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </Fragment>
    )
}