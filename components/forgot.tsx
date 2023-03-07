import axios from 'axios';
import { useEffect, useState } from 'react';

import ResetSuccess from '@/components/reset_success';

export default function Home() {
  const [email, setEmail] = useState('');

  const [resetLink, setResetLink] = useState(false);

  let handleForgot = async (e: any) => {
    e.preventDefault();

    const url =
      process.env.NEXT_PUBLIC_STRAPI_URL + '/api/auth/forgot-password';
    const data = {
      email: email,
    };

    // make the request using axios
    axios
      .post(url, data)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          // show the success message
          setResetLink(true);
        }
      })
      .catch((err) => {
        console.log(err);

        // show the error message
        alert('Error Happend');
      });
  };

  useEffect(() => {
    // logout the user
    localStorage.removeItem('token');
  }, []);

  return (
    <section className='bg-gray-50 dark:bg-gray-900 '>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        {resetLink ? (
          <ResetSuccess />
        ) : (
          <div className='w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
                Forgot Password?
              </h1>
              <div className='text-gray'>
                Please enter the address associated with your account.
              </div>
              <form
                className='space-y-4 md:space-y-6'
                action='#'
                onSubmit={handleForgot}
              >
                <div>
                  <label
                    htmlFor='email'
                    className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                  >
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div
                  className='btn btn-primary w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                  onClick={handleForgot}
                >
                  Submit
                </div>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don’t have an account yet?{' '}
                  <a
                    href='register'
                    className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                  >
                    Register
                  </a>
                </p>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
