import Login from "../componets/Login";
import Signup from "../componets/Signup";
import { useState } from "react";

export default function Register({setIsLogged}) {
    const[showLogin, setShowLogin] = useState(false)


    return(
        <>
 <div className="flex gap-4 items-center justify-center my-6 text-white font-mono">
        <button className=" p-3 text-xl uppercase rounded-md bg-amber-600/20 border border-amber-600/20 text-amber-700 hover:text-amber-900 cursor-pointer" onClick={()=> setShowLogin(false)}>Signup</button>
        or
        <button className=" p-3 text-xl uppercase rounded-md bg-amber-600/20 border border-amber-600/20 text-amber-700 hover:text-amber-900 cursor-pointer" onClick={()=> setShowLogin(true)}>login</button>
</div>
        {showLogin ? (<Login setIsLogged={setIsLogged}/>): (<Signup setIsLogged={setIsLogged}/>)}
        
        </>
    )
}