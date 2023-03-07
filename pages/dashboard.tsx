import Footer from '../components/footer';
import Header from '../components/header';
import Drawer from '@/components/drawer';

import Login from '@/components/login';
import { useEffect } from 'react';

import axios from 'axios';

export default function Home() {
  useEffect(() => {
    // check if the user is logged in by trying to access the /users/me endpoint, if not redirect to login page

    const token = localStorage.getItem('token');
    const url = process.env.NEXT_PUBLIC_STRAPI_URL + '/api/users/me';

    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log('user is authenticated');
        } else {
          console.log('user is not authenticated');
          window.location.href = '/login';
        }
      })
      .catch((err) => {
        console.log(err);
        window.location.href = '/login';
      });
  });

  return (
    <>
      {/* <Drawer /> */}
      <Header />
      <main></main>
      {/* <Footer /> */}
    </>
  );
}
