import LayoutIndex from "../layout/LayoutIndex";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <LayoutIndex>
      <Component {...pageProps} />
    </LayoutIndex>
  );
}
