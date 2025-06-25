import React, { useContext } from 'react';
import AuthContext from '../../../context/AuthContext/AuthContext';

const SocialLogin = () => {
  const {signInWithGoogle} = useContext(AuthContext);

  //use handle start>
 const handleGoogleSignIn = () =>{
  signInWithGoogle()
  .then(result =>{
    console.log(result.user);
  })
  .catch(error.message)
 }
   //use handle end>
  return (
    <div>
       <div className="divider">OR</div>
      <button onClick={handleGoogleSignIn} className='btn'>Google</button>
    </div>
  );
};

export default SocialLogin;