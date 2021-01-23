import React, { FC } from "react";
import { Provider } from "react-redux";

import "../styles/tailwind.css";
import { initializeStore } from "../src/store/";

type PropsType = {
  Component: React.ComponentType<any>;
  pageProps: any;
};

const MyApp: FC<PropsType> = ({ Component, pageProps }) => {
  const store = initializeStore();

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
