import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from '../../firebase/firebase init';

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
    

  }
  return (
    <AuthContext.Provider value={authInfo}>
     {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;