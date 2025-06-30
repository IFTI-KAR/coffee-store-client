import React, { use } from 'react';
import { FaCoffee, FaEnvelope, FaLock } from 'react-icons/fa';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2'; // ✅ Added this line at the top


const SignUp = () => {
  const {createUser}=use(AuthContext)
  console.log(createUser)
    
    const handleSignUp = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const {email,password,...restFormData}=Object.fromEntries(formData.entries())
   
   
    console.log(email,password);

    createUser(email, password)
    .then(result => {
    console.log(result.user);
     const useProfile={
      email,
      ...restFormData,
      creationTime:result.user?.metadata?.creationTime,
      lastSignInTime:result.user?.metadata?.lastSignInTime
    }
    


    //save profile info in the db
    fetch('https://coffee-store-server-three-weld.vercel.app/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(useProfile)
    })
    .then(res=>res.json())
    .then(data=>{
      if (data.insertedId){
       
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your account has been created",
  showConfirmButton: false,
  timer: 1500
});
      }
    })


  })
  .catch(error => {
    console.log(error);
  });

  };
  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="card w-full max-w-md bg-[#FFF8F3] shadow-xl border border-[#D2B48C] rounded-xl">
        <div className="card-body px-8 py-10">
          {/* Header with coffee icon */}
          <h1 className="text-4xl font-rancho text-center text-[#6F4E37] mb-4 flex justify-center items-center gap-3">
            <FaCoffee className="text-[#D2B48C]" />
            Join the Coffee Lovers
          </h1>
          <p className="text-center text-[#4B3832] mb-6 text-sm">Sign up to enjoy fresh brews, exclusive offers & more.</p>

          {/* SignUp form */}
          <form onSubmit={handleSignUp} className="space-y-5">
            {/* Email Field */}
            <div className="relative">
              <label className="label text-[#4B3832] font-semibold">Name</label>
              <div className="flex items-center">
                <span className="absolute pl-3 text-[#D2B48C]">
                  <FaEnvelope />
                </span>
                <input
                  type="text"
                  name='name'
                  placeholder="your name"
                  className="input input-bordered w-full pl-10 bg-white text-[#4B3832]"
                />
              </div>
            </div>
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
            <div className="relative">
              <label className="label text-[#4B3832] font-semibold">Address</label>
              <div className="flex items-center">
                <span className="absolute pl-3 text-[#D2B48C]">
                  <FaEnvelope />
                </span>
                <input
                  type="text"
                  name='address'
                  placeholder="your address"
                  className="input input-bordered w-full pl-10 bg-white text-[#4B3832]"
                />
              </div>
            </div>
            <div className="relative">
              <label className="label text-[#4B3832] font-semibold">Phone Number</label>
              <div className="flex items-center">
                <span className="absolute pl-3 text-[#D2B48C]">
                  <FaEnvelope />
                </span>
                <input
                  type="text"
                  name='phone'
                  placeholder="your phone number"
                  className="input input-bordered w-full pl-10 bg-white text-[#4B3832]"
                />
              </div>
            </div>
            <div className="relative">
              <label className="label text-[#4B3832] font-semibold">Photo URL</label>
              <div className="flex items-center">
                <span className="absolute pl-3 text-[#D2B48C]">
                  <FaEnvelope />
                </span>
                <input
                  type="text"
                  name='photo'
                  placeholder="your image"
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

            

            {/* Submit button */}
            <button className="btn bg-[#D2B48C] hover:bg-[#c59b72] text-[#331A15] font-bold w-full mt-3">
              Sign Up
            </button>
          </form>

          {/* Footer */}
          <p className="text-center text-sm mt-6 text-[#4B3832]">
            Already have an account?{' '}
            <a href="/signin" className="font-bold hover:underline text-[#6F4E37]">
               Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
