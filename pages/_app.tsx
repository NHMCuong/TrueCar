import "../styles/globals.scss";
import "antd/dist/antd.css";

import type { AppProps } from "next/app";
import { store, wrapper } from "../redux/store";
import { Provider } from "react-redux";
import Layout from "../components/Layout/layout";

function TrueCar({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default wrapper.withRedux(TrueCar);
