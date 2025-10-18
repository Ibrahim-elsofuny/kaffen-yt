import { createContext, useState } from "react";



export const ChangeNameContext = createContext()

export function ChangeNameProvider({ children }) {
    const [changeName,setChangeName]=useState("Ahmed")
    return <ChangeNameContext.Provider value={{changeName,setChangeName}}>
        {children}
    </ChangeNameContext.Provider>
}