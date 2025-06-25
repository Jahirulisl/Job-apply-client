import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../../firebase/firebase init';

 //make google auth providar start ata vitora o korta partam start>
 const googleProvider = new GoogleAuthProvider();
 //make google auth providar start ata vitora o korta partam start>
const AuthProvider = ({children}) => {
  //kicu jenish amra auth context a set kori>

  const [user,setUser] = useState(null);
  const [loading,setLoading] = useState(true);
//createUser from firebase auth docs tutrila start>
  const createUser = (email,password) =>{
    setLoading(true);
   return createUserWithEmailAndPassword(auth,email,password);
  }
 //createUser from firebase auth docs tutrila end>

 //signIN from firebase auth docs tutrila start>
const signInUser = (email,password) =>{
  setLoading(true);
  return signInWithEmailAndPassword(auth,email,password)
}
//sign in with google start>
const signInWithGoogle = () =>{
  setLoading(true);
  return signInWithPopup(auth, googleProvider)
}

//sign in with google start>

//for sign out user from firebase tutrial start>
const signOutUser = () =>{
  setLoading(true);
  return signOut(auth)
}

//for sign out user from firebase tutrial start>

 //signIN from firebase auth docs tutrila end>
   // we use obserber start>
   useEffect(() =>{
   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
     setUser(currentUser);
     console.log('state captured',currentUser)
     setLoading(false);
    })
  return () =>{
    unsubscribe();
  }
   },[])
   // we use obserber end>
  const authInfo ={
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    
  }
  return (
    <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;