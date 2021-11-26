import React from 'react';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>MetaDino</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
