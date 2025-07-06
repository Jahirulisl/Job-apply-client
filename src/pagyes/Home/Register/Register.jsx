import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import registerLottiData from '../../../assets/lotti/register.json.json'
import AuthContext from '../../../context/AuthContext/AuthContext';
import SocialLogin from '../Saherd/SocialLogin';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  //use context from hooks>
  const {createUser} = useContext(AuthContext);

  const navigate =useNavigate();
   //handle of from email and password start>
   const handlRegister = e =>{
    e.preventDefault();
    const form =e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)

    //password validation: you only make own>>
    //show password validation error 

    createUser(email,password)
    .then(result =>{
      console.log(result.user);
      //add tost masseg start>     
               Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Successfully YOU Register!",
              showConfirmButton: false,
              timer: 1500,
              toast: true
            });
            //add tost masseg end> 
         navigate('/signIn')  
    })
    .catch(error =>{
      console.log(error.message)
    })
   }
   //handle of from email and password start>
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left w-96">
          <Lottie animationData={registerLottiData}></Lottie>
          
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="ml-8 mt-4 text-5xl font-bold">Register now!</h1>
            <form onSubmit={handlRegister} className="fieldset">
              <label className="label">Email</label>
              <input type="email" 
              name='email'
              className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" 
              name='password'
              className="input" placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Register</button>
            </form>
             <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;