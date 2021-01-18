import React, { FC } from "react";
import Head from "next/head";

type PropsType = {
  title?: string;
};

const DefaultLayout: FC<PropsType> = ({
  title = "Chang Gio Photography",
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
