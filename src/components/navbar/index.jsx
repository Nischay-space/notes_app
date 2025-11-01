import logo from "../../assets/pic.png"
export const Navbar=()=>{
    return(
        <header className="flex items-center border-b-2 py-1 px-5 gap-3 border-green-400">
            <div className="w-20 h-20">
                <img className="w-full h-full" src={logo} alt="Logo"/>
            </div>
            <h1 className="text-5xl text-green-500 font-bold">ScribeIt</h1>
        </header>
    )
}