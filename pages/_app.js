import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import Store from "@/redux/store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider store={Store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  );
}
