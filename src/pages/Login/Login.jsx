import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
const Login = () => {
    const { login} = useContext(AuthContext);
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password)
      setError('')
      setSuccess('')
      login(email, password)
        .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
          setSuccess('login successfully')
          navigate(from, { replace: true })
          toast.success('login successfully')
        })
        .catch(error => {
          const errorM = error.message;
          setError(errorM)
  
        })
    }
  
 

  
    return (
    <div className=' min-h-full px-6 py-12 lg:px-8 overflow-hidden '>
            <div className="flex   flex-col justify-center bg-white ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm" >
       <Link to='/'>
       <h1 className='text-3xl text-center text-pink-500 font-semibold font-serif'>LuxeCart</h1>
       </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* login form  */}
          <form  onSubmit={handleLogin} className="space-y-6" >
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <p className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <p className='text-red-600'>{error}</p>
                <p className='text-green-600'>{success}</p>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
          Don't Have an Account?{' '}
            <Link to='/registration'  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Please sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
   
    );
};

export default Login;