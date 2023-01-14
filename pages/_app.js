import LayoutWrapper from "@/components/LayoutWrapper";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}
