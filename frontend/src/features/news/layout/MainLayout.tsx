import { Container } from '@mui/material';
import Header from '../../../components/Header/Header';
import type { FC, PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </>
  );
};

export default MainLayout;
