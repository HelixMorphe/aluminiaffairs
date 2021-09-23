import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Background from "../components/Background";
import Head from 'next/head'
const index = () => {
  return (
    <div>
      <Header />
      <Background />
    <Head>
        <title>5th Alumni Meet 2021</title>
    </Head>
    </div>
  );
};

export default index;
