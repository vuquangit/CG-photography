import React, { FC } from "react";
import Head from "next/head";

import Header from  '@/components/Header'

type PropsType = {
  title?: string;
};

const DefaultLayout: FC<PropsType> = ({
  title = "",
  children,
}) => {
  const titleHead = `${title ? `${title} - `: '' }Chang Gio Photography`

  return (
    <>
      <Head>
        <title>{titleHead}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />

      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
