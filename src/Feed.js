import React, { useEffect, useState } from 'react';
import  './Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption  from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventIcon from '@mui/icons-material/Event';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import {firebaseApp} from "./firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { collection, getFirestore, onSnapshot ,doc ,setDoc,query,orderBy} from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';






function Feed() {
  const user=useSelector(selectUser);

  const [input , setInput] = useState("");
  const [posts,setPosts] = useState([]);
  const db =getFirestore(firebaseApp);
  // useEffect(() => {
  //   db.collection("posts").onSnapshot((snapshot) => {
  //     const postData = snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.data(),
  //     }));
  //     setPosts(postData);
  //   });
  
  // }, [posts]);
  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q,(snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }));
      setPosts(postData);
    });
  
    return () => {
      // Unsubscribe from the snapshot listener when the component unmounts
      unsubscribe();
    };
  }, [db]);
  





   const sendPost = (e) => {
      e.preventDefault();
      const collectionRef = collection(db, 'posts');
      const newDocRef = doc(collectionRef);
setDoc(newDocRef, {
  name: user.displayName,
  description: user.email,
  message: input,
  photoUrl: user.photoUrl || "",
  timestamp: firebase.firestore.FieldValue.serverTimestamp()
});


  //     const postRef = doc(db, 'posts');
  //   setDoc(postRef, { name:'Krishna Kant Mishra' , description : 'This is a description' ,message: input ,photoUrl:"", timestamp: firebase.firestore.FieldValue.serverTimestamp()});
  //   // const refpost=collection(db,"posts").set(
  //   //   {
  //   //      name:'Krishna Kant Mishra',
  //   //     description : 'This is a description',
  //   //     message: input,
  //   //    photoUrl:"",
  //   //  timestamp: firebase.firestore.FieldValue.serverTimestamp(),

  //   //  });
  //    ////return () =>{
  //    // refpost();
    setInput("");

  //    //}
     

    };

  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
           <div className='feed_input' >
            <CreateIcon />
            <form>
                <input value={input} onChange={e=>setInput(e.target.value)} type="text"/>
                <button onClick={sendPost} type="submit">Send</button>
            </form>
           </div>
           <div className='feed_inputOptions'>
            <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9"/>
            <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
            <InputOption Icon={EventIcon} title="Event" color="#C0CBCD"/>
            <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7FC15E"/>
           </div>
        </div>

        {posts.map(({id,data:{name,description,message,photoUrl}})=>(
          <Post 
          key={id}
          name={name} 
          description={description} 
          message={message} 
          photoUrl={photoUrl} 
          />

        ))}
       

    </div>
  )
}

export default Feed;