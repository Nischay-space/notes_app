import { createContext,useContext,useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";
 const NotesContext=createContext()
 const NotesProvider=({children})=>{
    const intitialstate = {
    title: '',
    text: '',
    notes: [],
    archive:[],
    bin:[]

  }


  const [{ title, text, notes, archive,bin }, notesDispatch] = useReducer(notesReducer, intitialstate)


    return(
        <NotesContext.Provider value={{title, text, notes , archive,bin,notesDispatch}}>
            {children} 
        </NotesContext.Provider>
    )
 }
 const useNotes=()=>useContext(NotesContext);
 export{NotesProvider,useNotes}