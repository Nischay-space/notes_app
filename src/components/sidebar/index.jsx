import { NavLink } from "react-router-dom";
export const Sidebar = () => {
    const getstyles=({isActive})=>{
        const styles='flex items-center gap-2 px-2 py-1 rounded-tr-full rounded-br-full'
        return isActive? `text-slate-50 bg-green-500 ${styles}` :`hover:bg-green-500 hover:text-slate-50 ${styles}`
    }
    return (
        <aside className="flex flex-col gap-3 w-[150px] h-screen p-3 border-r-2 border-green-400 font-semibold gap-y-7  ">
            <NavLink className={getstyles} to="/"><span class="material-icons">
                home
            </span><span>Home</span></NavLink>
            <NavLink 
            className={getstyles}  to="/archive"><span class="material-icons-outlined">
                archive
            </span><span>Archive</span></NavLink>
            <NavLink  className={getstyles}  to="/important"><span class="material-icons">
                label_important
            </span><span>Important</span></NavLink>
            <NavLink  className={getstyles}  to="bin"><span class="material-icons-outlined">
                delete
            </span><span>Bin</span></NavLink>
        </aside>
    )
}