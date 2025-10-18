import React, { useContext, useEffect, useRef } from "react";
import { ChangeNameContext } from "./ChangeNameContext";

export default function UseRef() {
    const { setChangeName } = useContext(ChangeNameContext);
    const divRef = useRef(null);
    const inputRef = useRef(null);
    useEffect(() => {
        divRef.current.style.color = "red";
        inputRef.current.focus();
        inputRef.current.style.outline = "1px solid red";
        const body = document.querySelector("body")
        console.log(body);
    }, []);
    return (
        <div ref={divRef} className="use-ref">
            <input type="text" name="" id="" ref={inputRef} onChange={(event)=>setChangeName(event.target.value)}/>
        </div>
    );
}
