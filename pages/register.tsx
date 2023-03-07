import Footer from '../components/footer';
import Header from '../components/header';
import Drawer from '@/components/drawer';

import Register from '@/components/register';

export default function Home() {
  return (
    <>
      {/* <Drawer /> */}
      <Header />
      <main>
        <Register />
      </main>
    </>
  );
}
