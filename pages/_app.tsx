import "../styles/globals.scss";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.css'

import type { AppProps } from "next/app";
import { store, wrapper } from "../redux/store";
import { Provider } from "react-redux";

function TrueCar({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default wrapper.withRedux(TrueCar);
