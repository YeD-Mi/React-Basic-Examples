import React from 'react'
import { useRef } from 'react'
import {firestore} from "./Firebase"
import {addDoc,collection} from "@firebase/firestore" 

export default function SubmitData() {
    const userRef = useRef();
    const emailRef = useRef();
    const ref = collection (firestore,"users");

    const handleSave = async(e) =>
    {
        e.preventDefault();
        console.log(userRef.current.value);

        let data = {userName:userRef.current.value,email:emailRef.current.value};

        try{
            addDoc(ref,data);
        }catch(e)
        {
            console.log(e);
        } 
    };
  return (
    <div style={{background: 'linear-gradient(to right, #353435, #cf2627, #353435)',height:'100vh'}}>
        <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSave}>
            <div style={{backgroundColor:'white',width:'20vw',height:'50vh',alignSelf:'center',marginTop:'20vh',borderRadius:'40px'}}>
            <img src={require('../img/homecooking-logo.png')} style={{width:'12vw',marginLeft:'4vw',marginTop:'2vh'}} alt="Resim açıklaması"/>
                <div>
                <h1 style={{textAlign:'center'}}>Web Panel</h1>
                </div>
                <div>
                <label>
                    Enter User Name:
                </label>
                <input type="text" ref={userRef}></input>
            </div>
            <div>
                <label>
                    Enter Email:
                </label>
                <input type="text" ref={emailRef}>
                </input>
            </div>
            <div>
                 <button type="submit">Click</button>
            </div>
            </div>
        </form>
    </div>
  )
}



