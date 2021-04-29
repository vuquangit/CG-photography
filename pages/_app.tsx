import React, { FC, useEffect } from "react";
import { Provider } from "react-redux";

import "../styles/tailwind.css";
import { initializeStore } from "../src/store/";

type PropsType = {
  Component: React.ComponentType<any>;
  pageProps: any;
};

const MyApp: FC<PropsType> = ({ Component, pageProps }) => {
  const store = initializeStore();

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration) {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
