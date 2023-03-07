import { useEffect, useState } from 'react';
import axios from 'axios';

/* eslint-disable @next/next/no-img-element */
export default function Header() {
  // isAuthenticated State
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // check if the strapi user is authenticated or not?
    // if authenticated then show the logout button
    // otherwise don't show the logout button

    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/users/me`;
    const token = localStorage.getItem('token');

    // make a request using axios
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('user is authenticated');
          setIsAuthenticated(true);
        } else {
          console.log('user is not authenticated');
          setIsAuthenticated(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <div className='navbar bg-base-100 absolute top-0'>
      <div className='flex-1 drawer-content'>
        <label htmlFor='my-drawer' className='drawer-button'>
          <a className='btn btn-ghost normal-case text-xl'>STRAPI AUTH CRUD</a>
        </label>
      </div>

      <div className='flex-none'>
        <div className='dropdown dropdown-end'></div>
        <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
            <div className='w-10 rounded-full'>
              <img src='./images/profile.jpg' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'
          >
            {/* check if not authenticated then show the register and login links */}
            {!isAuthenticated && (
              <>
                <li>
                  <a className='justify-between' href='register'>
                    Register
                  </a>
                </li>
                <li>
                  <a href='login'>Login</a>
                </li>
              </>
            )}

            {/* check if user is authenticated then show the logout otherwise don't do this */}
            {isAuthenticated && (
              <>
                <li>
                  <a className='justify-between'>Profile</a>
                </li>
                <li>
                  <a href='settings'>Settings</a>
                </li>
                <li>
                  <a href='logout'>Logout</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
