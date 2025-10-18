import React, { useEffect } from "react";

export default function Test() {
    useEffect(() => {
        const x = setInterval(() => {
            console.log("Componente Test");
        }, 1000);
        return () => clearInterval(x);
    }, []);
    return <div>Test</div>;
}
