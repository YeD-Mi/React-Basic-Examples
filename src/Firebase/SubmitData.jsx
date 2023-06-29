import React from 'react'
import { useRef } from 'react'
import {firestore} from "./Firebase"
import {addDoc,collection} from "@firebase/firestore" 

export default function SubmitData() {
    const userRef = useRef();
    const ref = collection (firestore,"users");

    const handleSave = async(e) =>
    {
        e.preventDefault();
        console.log(userRef.current.value);

        let data = {userName:userRef.current.value};

        try{
            addDoc(ref,data);
        }catch(e)
        {
            console.log(e);
        } 
    };
  return (
    <div>
        <form onSubmit={handleSave}>
            <label>
                Enter User Name:
            </label>
            <input type="text" ref={userRef}>
            </input>
            <button type="submit">Click</button>
        </form>
    </div>
  )
}
