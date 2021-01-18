import React, { FC } from "react";
import '../styles/tailwind.css'
// import '../src/assets/main.css';

type PropsType ={
  Component: React.ComponentType<any>
  pageProps: any
}

const MyApp: FC<PropsType> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
}

export default MyApp;
