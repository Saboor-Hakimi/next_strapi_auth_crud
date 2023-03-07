import Footer from '../components/footer';
import Header from '../components/header';
import Drawer from '@/components/drawer';

import Login from '@/components/login';

export default function Home() {
  return (
    <>
      {/* <Drawer /> */}
      <Header />
      <main>
        <Login />
      </main>
    </>
  );
}
