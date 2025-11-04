import React, { useState, useCallback, useEffect } from "react";

const PasswordComp = () =>{
    const [length, setLength] = useState(8);
    const [numberAllowed , setnumberAllowed] = useState(false);
    const [charAllowed, setcharAllowed] = useState(false);
    const [password,setPassword] = useState("")

    const passwordGenrator = useCallback(()=>{
       let pass ="";
       let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" ;
       if(numberAllowed) str+= "0123456789";
       if(charAllowed) str+= "!@#$%^&*-_+=(){}[]~";
       for(let i =0; i< password.length;i++){
        let char = Math.floor(Math.random() * str.length + 1)
        pass = str.charAt(char)
       }
       setPassword(pass)
       
    },[length,numberAllowed,charAllowed,setPassword]);
    useEffect(() =>{
        passwordGenrator()
    },[length,numberAllowed,charAllowed,setPassword])
    return (
        <>
            <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-blue-400 bg-gray-800">
                <h1 className="text-white text-center my-3" > Password Change</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4">
                <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="outline-none w-full py-1 px-3"
                style={{ backgroundColor: "white" }}
                />
                <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <div className="flex items-center gap-x-1"> 
                        <input type="range" min={6} max={100} value={length} className="cursor-pointer" onChange={(e)=>{setLength(e.target.value)}}/><label>Length :{length}</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input type="checkbox" id="numberInput" defaultChecked={numberAllowed}  onChange={(prev)=> !prev}/><label htmlFor="numverInput">Number Aloowed</label>
                    </div>
                     <div className="flex items-center gap-x-1"> 
                        <input type="checkbox"  id="charInput" defaultChecked={charAllowed} onChange={(prev)=> !prev}/><label htmlFor="charInput">Charachter Aloowed</label>
                    </div>
                </div>
            </div>
        </>    
    )
}
export default PasswordComp