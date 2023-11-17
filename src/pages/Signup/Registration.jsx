
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';


  const Registration  = () => {
    const { createUser } = useContext(AuthContext)
    const [errorRegister, setErrorRegister] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const password = form.password.value;
      const role = form.role.value;
      const saveUser = {
        name,
        email,
        password,
        role,
      };
  
      setErrorRegister('');
      setSuccess('');
  
      if (password.length < 6) {
        setErrorRegister('Password must be at least 6 characters');
        return;
      }
      createUser(email, password)
      .then((res) => {
        fetch(` https://electra-poll-server-2pqs2aw2n-hridoy281810.vercel.app/users`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then((insertedId) => {
          console.log(insertedId)
         if (insertedId) {
           toast.success(`Hello! ${email}! Welcome`);
           navigate('/');
         } else {
           toast.error('User already exists');
         }
       })
      } )
    }
  
  


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       <Link to='/'>
       <h1 className='text-3xl text-center text-pink-500 font-semibold font-serif'>LuxeCart</h1>
       </Link>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Login in to your account
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* signup form  */}
          <form  onSubmit={handleRegister} className="space-y-6" >
            <div>
              <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                Your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
         
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
             
              </div>
              <div>
            <div className="mt-2">
              <select
                id="role"
                name="role"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
              </select>
            </div>
          </div>

              <p className='text-red-700'>{errorRegister}</p>
                <p className='text-green-700'>{success}</p>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >{success ? <><Link to='/'>Sign in</Link></> : 'Sign in'} 
                
              </button>
            </div>
            <div>
      
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
          Already Have an Account?{' '}
            <Link to='/login'  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Please Login
            </Link>
          </p>
        </div>
      </div>
   
    );
};

export default Registration ;