import { useNotes } from "../../context/notes-context"
import { isArchive } from "../../utils/isArchive"

export const NotesCard = ({ id, title, text,isPinned}) => {
    const{notesDispatch,archive}=useNotes()
const onPinClick=(id)=>{
    !isPinned ? notesDispatch({
        type: 'PIN',
        payload: {id}
    }): notesDispatch({
         type:'UNPIN',
         payload: {id}
    }) 

}
const onArchiveClick=(id)=>{
    !isNotesInArchive? notesDispatch({
        type:'ARCHIVE',
        payload: { id }
    }):notesDispatch({
        type:'REMOVE',
        payload:{id}

    })

}
const onDeleteClick=(id)=>{
    notesDispatch({
        type:'DELETE',
        payload: {id}
    })
}

const isNotesInArchive=isArchive(archive,id)

    return (
        <div className="w-60 border border-neutral-400 rounded-md p-2" key={id}>
            <div className="flex justify-between">
                <p>{title}</p>
                {
                    !isNotesInArchive?<button onClick={()=>onPinClick(id)}><span class={isPinned? "material-icons":"material-icons-outlined"}>
                    push_pin
                </span></button>:<></>
                }
                
            </div>
            <div className="flex flex-col">
                <p>{text}</p>
                <div className="ml-auto">
                    <button onClick={()=>onArchiveClick(id)}><span class={isNotesInArchive?" material-icons" :"material-icons-outlined"}>
                        archive
                    </span></button>
                    <button onClick={()=>onDeleteClick(id)}><span class="material-icons-outlined">
                        delete
                    </span></button>
                </div>
            </div>

        </div>
    )
}