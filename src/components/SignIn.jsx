import React from 'react';
import { use } from 'react';
import { FaCoffee, FaEnvelope, FaLock } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
const SignIn = () => {
    const {signInUser}=use (AuthContext);

    const handleSignIn=e=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email,password);

        //firebase sign in send

        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            const signInInfo=
            {
                email,
                lastSignInTime:result.user?.metadata?.lastSignInTime
            }


            //update last sign in to the database
            fetch('https://coffee-store-server-three-weld.vercel.app/users',{
                method:"PATCH",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(signInInfo)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('after update patch',data)
            })




        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="min-h-screen  flex items-center justify-center">
              <div className="card w-full max-w-md bg-[#FFF8F3] shadow-xl border border-[#D2B48C] rounded-xl">
                <div className="card-body px-8 py-10">
                  {/* Header with coffee icon */}
                  <h1 className="text-4xl font-rancho text-center text-[#6F4E37] mb-4 flex justify-center items-center gap-3">
                    <FaCoffee className="text-[#D2B48C]" />
                    Join the Coffee Lovers
                  </h1>
                  <p className="text-center text-[#4B3832] mb-6 text-sm">Sign in to enjoy fresh brews, exclusive offers & more.</p>
        
                  {/* SignUp form */}
                  <form onSubmit={handleSignIn} className="space-y-5">
                    
                    <div className="relative">
                      <label className="label text-[#4B3832] font-semibold">Email</label>
                      <div className="flex items-center">
                        <span className="absolute pl-3 text-[#D2B48C]">
                          <FaEnvelope />
                        </span>
                        <input
                          type="email"
                          name='email'
                          placeholder="your email"
                          className="input input-bordered w-full pl-10 bg-white text-[#4B3832]"
                        />
                      </div>
                    </div>
                    
        
                    {/* Password Field */}
                    <div className="relative">
                      <label className="label text-[#4B3832] font-semibold">Password</label>
                      <div className="flex items-center">
                        <span className="absolute pl-3 text-[#D2B48C]">
                          <FaLock />
                        </span>
                        <input
                          type="password"
                          name='password'
                          placeholder="Your secret..."
                          className="input input-bordered w-full pl-10 bg-white text-[#4B3832]"
                        />
                      </div>
                    </div>
        
                    {/* Forgot password */}
                    <div className="text-right">
                      <a className="text-sm text-[#6F4E37] hover:underline cursor-pointer">
                        Forgot password?
                      </a>
                    </div>
        
                    {/* Submit button */}
                    <button className="btn bg-[#D2B48C] hover:bg-[#c59b72] text-[#331A15] font-bold w-full mt-3">
                      Sign In
                    </button>
                  </form>
        
                  {/* Footer */}
                  <p className="text-center text-sm mt-6 text-[#4B3832]">
                    Already have an account?{' '}
                    <a href="/signup" className="font-bold hover:underline text-[#6F4E37]">
                       Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
    );
};

export default SignIn;