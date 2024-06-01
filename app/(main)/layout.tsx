import Header from '@/components/Header';
import React, { FC, PropsWithChildren } from 'react';

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-4">{children}</div>
    </>
  );
};

export default MainLayout;
