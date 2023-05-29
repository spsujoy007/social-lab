import { useLottie } from 'lottie-react';
import React from 'react';
import groovyWalkAnimation from "../../assests/logingif.json";
import { Link } from 'react-router-dom';


const Login = () => {

    const options = {
        animationData: groovyWalkAnimation,
        loop: true
      };
      
      const { View } = useLottie(options);

    return (
        <div className='flex items-center justify-center h-[100vh] '>
            <div className='p-10 flex items-center gap-20 bg-[#ffffff6a]  rounded-xl justify-center'>
                <div>
                  {View}
                </div>
                <div>
                  <h1 className='text-3xl text-primary font-bold uppercase'>Log in</h1>
                  <div className='mt-5 w-[500px]'>

                    <div>
                      <div className='mt-5'>
                          <label htmlFor="email" className='text-black mb-1'>Email</label>
                          <input name="email" id='email' className='bg-[#ffffff6a] border-b-[1px] border-primary text-black outline-none p-3  w-full' type="email" placeholder='john@gmail.com' />
                      </div>
                      
                      <div className='mt-3'>
                          <label htmlFor="password" className='text-black mb-1'>Create a Password</label>
                          <input name="password" id='password' className='bg-[#ffffff6a] border-b-[2px] border-primary text-black outline-none p-3  w-full' type="password" placeholder='create a strong password' />
                      </div>
                    </div>

                    <div className='mt-5'>
                      <button className='w-full bg-primary px-5 py-2 text-white rounded-md'>Log in</button>

                      <p className='mt-2 text-black'>If you have not an account please <Link className='text-primary font-bold' to={'/signup'}>Sign up</Link>! </p>
                    </div>

                  </div>
                </div>        
            </div>
        </div>
    );
};

export default Login;