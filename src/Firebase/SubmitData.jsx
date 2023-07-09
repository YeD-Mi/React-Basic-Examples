import {useEffect,useState } from 'react'
import {useRef} from 'react'
import {firestore,signInWithGoogle} from "./Firebase"
import {collection,setDoc,getDocs,updateDoc,deleteDoc,doc,Timestamp} from "@firebase/firestore" 

export default function SubmitData() {
    const [users,setUsers] = useState([]);
    const userRef = useRef();
    const emailRef = useRef();
    const ageRef = useRef();
    const dateRef = useRef();
    const ref = collection (firestore,"users");
    const epochNumber = Date.now();
    const deleteUsers = async (id) => {
        const userDoc = doc(firestore,"users",id)
        await deleteDoc(userDoc)
    }
    const updateUsers = async (id,userName,age) => 
    {
        const userDoc = doc (firestore,"users",id)
        const newFields = {userName: userName + " Yeni",age:age+1}
        await updateDoc (userDoc,newFields)
    };
    useEffect(() => {
        const getUsers = async () => {
          const data1 = await getDocs(ref);
          setUsers(data1.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getUsers();
      }, [ref]);
    
    //Seçili alanı Timestamp'e çevirmek;
    const convertToTimestamp = (dateString) => {
        const date = new Date(dateString);
        return Timestamp.fromDate(date);
      };
    
    const handleSave = async(e) =>
    {
        e.preventDefault();
        console.log(userRef.current.value);
        const createdDate = convertToTimestamp(dateRef.current.value);
        let data = {userName:userRef.current.value,email:emailRef.current.value,age:Number(ageRef.current.value),createdDate: createdDate};

        try{
            //Document ID otomatik atılır.
            //addDoc(ref,data);
            await setDoc(doc(ref, epochNumber.toString()), data);
        }catch(e)
        {
            console.log(e);
        } 
    };
  return (
    <div style={{display:'flex',flexDirection:'row',background: 'linear-gradient(to right, #353435, #cf2627, #353435)',height:'100vh',width:'100vw'}}>
    <div style={{height:'100vh',width:'50vw'}}>
        <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSave}>
            <div style={{backgroundColor:'white',width:'20vw',height:'50vh',alignSelf:'center',marginTop:'10vh',borderRadius:'40px'}}>
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
                <label>
                    Enter Age:
                </label>
                <input type="number" ref={ageRef}>
                </input>
            </div>
            <div>
                <label>
                    Date:
                </label>
                <input type="date" ref={dateRef}>
                </input>
            </div>
            <div style={{textAlign:'center',marginTop:'15px'}}>
                 <button type="submit">Add</button>
            </div>
            </div>
        </form>
        <div style={{textAlign:'center'}}>
                <button onClick={signInWithGoogle}>Sign in With Google</button>
                <h2>{localStorage.getItem("name")}</h2>
                <h3>{localStorage.getItem("email")}</h3>
                <img src={localStorage.getItem("userPic")} alt="" />
            </div>
        <div>
            </div>
            
    </div>
    <p>{users.map((user) => {
                    return(
                    <div style={{display:'flex',backgroundColor:'white',marginTop:'10vh',width:'40vw',height:'8vh',alignItems:'center',borderRadius:'10px',borderWidth:'2px',border:'solid'}}>
                        <p style={{margin:'10px'}}>{user.userName}</p>
                        <p style={{margin:'10px'}}>{user.email}</p>
                        <p style={{margin:'10px'}}>{user.age}</p>
                        <button onClick={() => {updateUsers(user.id,user.userName,user.age)}} style={{borderRadius:'10px'}}>Update</button>
                        <button onClick={() => {deleteUsers(user.id)}} style={{borderRadius:'10px'}}>Delete</button>
                    </div>);
                 })}</p>
    </div>
  )
}



