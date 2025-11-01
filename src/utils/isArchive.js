export const isArchive=(archive,id)=>{
    return archive.some(note=>note.id===id);
}