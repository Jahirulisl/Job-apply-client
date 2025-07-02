import Lottie from 'lottie-react';
import signInData from '../../assets/lotti/signin.json.json'
import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';
import SocialLogin from '../Home/Saherd/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';


const SignIn = () => {
  //use context from hookes start>
  const { signInUser } = useContext(AuthContext);
  //use context from hookes start>

  //for location start>
 const navigate =useNavigate();
 const location = useLocation()
 console.log('in signIn page',location);
 const from = location.state || '/';
  //for location end>
  const handlSignIn = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    //from tutril firebase sininUser >
    signInUser(email, password)
      .then(result => {
        console.log('sign In', result.user)
        navigate(from);
      })
      .catch(error => {
        console.log(error);
      })

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={signInData}></Lottie>

        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="ml-8 mt-4 text-5xl font-bold">LogIn now!</h1>
            <form onSubmit={handlSignIn} className="fieldset">
              <label className="label">Email</label>
              <input type="email"
                name='email'
                className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password"
                name='password'
                className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">LogIn</button>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;