import Footer from '../components/footer';
import Header from '../components/header';
import Drawer from '@/components/drawer';

import Forgot from '@/components/forgot';

export default function Home() {
  return (
    <>
      {/* <Drawer /> */}
      <Header />
      <main>
        <Forgot />
      </main>
    </>
  );
}
