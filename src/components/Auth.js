import React, { useState } from "react";

export default function Auth(){
    const [auth, setAuth] = useState('');

    const handleClick = () =>{
        console.log("Hello")
    }

    return (
        <div onClick={handleClick}>
            Hello
        </div>
    )
}