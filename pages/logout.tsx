import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // logout the user by removing the token from local storage
    localStorage.removeItem('token');
    // redirect the user to the login page
    window.location.href = '/login';
  }, []);

  return <></>;
}
