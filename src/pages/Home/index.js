import { Navbar } from "../../components/navbar";
import { Fragment } from "react";
import { Sidebar } from "../../components/sidebar";
import { NotesCard } from "../../components/NotesCard";
import { useNotes } from "../../context/notes-context";
export const Home = () => {
  const { title, text, notes, notesDispatch } = useNotes();

  const onTitleChange = (e) => {
    notesDispatch({
      type: 'TITLE',
      payload: e.target.value
    })
  }
  const onTextChange = (e) => {
    notesDispatch({
      type: 'TEXT',
      payload: e.target.value
    })
  }
  const onAddClick = (e) => {
    notesDispatch({
      type: 'ADD',
    })
    notesDispatch({
      type: 'CLEAR',
    })
  }
  console.log(notes);
  const pinnedNotes = notes?.length > 0 && notes.filter(({ isPinned }) => isPinned);
  const otherNotes = notes?.length > 0 && notes.filter(({ isPinned }) => !isPinned);

  

  return (
    <Fragment>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex flex-col w-screen mt-7">
          <div className="flex flex-col w-[450px] relative self-center">
            <input value={title} onChange={onTitleChange} className="border border-neutral-800 rounded-t-md focus:outline-none border-b-0 p-1" placeholder="Enter Title" />
            <textarea value={text} onChange={onTextChange} className="h-[100px] border border-neutral-800 rounded-t-md focus:outline-none p-1" placeholder="Enter Text" />
            <button disabled={title?.length === 0} onClick={onAddClick} className="w-7 h-7 absolute bottom-0 right-0 border bg-green-500 text-slate-50 rounded-full ">
              <span class="material-icons"> add </span>
            </button>
          </div>
          <div className="mt-14 ml-10 flex flex-col gap-5">
          {
            pinnedNotes?.length > 0 && (
              <div>
                <h3>Pinned Notes</h3>
                <div className="flex flex-wrap gap-5">

                  {
                    pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text, isPinned }) => (
                      <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
                    ))
                  }
                </div>
              </div>

            )
          }
          <div>{
            pinnedNotes?.length > 0 && <h3>Other Notes</h3>
          }
          <div className="flex flex-wrap gap-5">

            {
              otherNotes?.length > 0 && otherNotes.map(({ id, title, text, isPinned }) => (
                <NotesCard key={id} id={id} title={title} text={text} isPinned={isPinned} />
              ))
            }
          </div></div>
          
          </div>
        </div>
      </main>
    </Fragment>
  );
};
