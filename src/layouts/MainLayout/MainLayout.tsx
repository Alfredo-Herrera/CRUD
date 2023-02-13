import Alerts from '@/atoms/Alerts';
import Loading from '@/atoms/Loading';
import Navbar from '@/molecules/Navbar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Head from 'next/head';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import { main } from '../../../redux/reducers/main';
import { ContainerBody } from './styles';

export interface mainInterface {
  children: React.ReactElement | React.ReactNode;
  title: string;
}
// eslint-disable-next-line react/function-component-definition
const MainLayout: FC<mainInterface> = ({ children, title }) => {
  const { error, loading } = useSelector((state: main) => state.main);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="author" content="Alfredo Herrera" />
        <meta name="description" content="Informacion sobre el contacto" />
        <meta name="keywords" content={`${title},`} />
      </Head>

      <main>
        <Grid container>
          <Grid item md={12}>
            <Navbar />
          </Grid>
          <Toolbar />
          <ContainerBody container>
            <Alerts {...error} />
            <Loading open={loading} />
            {children}
          </ContainerBody>
        </Grid>
      </main>
    </>
  );
};

export default MainLayout;
