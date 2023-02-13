import MainLayout from '@/layouts/MainLayout/MainLayout';
import { ReactElement } from 'react';

const HomePage = () => {
  return (
    <>
      <h1>hola mundo</h1>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Home">{page}</MainLayout>;
};

export default HomePage;
