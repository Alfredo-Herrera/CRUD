import MainLayout from '@/layouts/MainLayout/MainLayout';
import SeccionLogin from '@/organisms/SeccionLogin';
import Grid from '@mui/material/Grid';
import { ReactElement } from 'react';

const HomePage = () => {
  return (
    <>
      <Grid
        item
        md={12}
        sx={{
          display: 'grid',
          placeItems: 'center',
          marginBottom: '30px',
        }}
      >
        <SeccionLogin />
      </Grid>
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout title="Home">{page}</MainLayout>;
};

export default HomePage;
