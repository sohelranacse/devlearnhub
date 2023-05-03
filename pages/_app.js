import '../styles/globals.css'
import App from "next/app";
import axios from "axios";
import { ThemeProvider } from "next-themes";
import NextNProgress from "nextjs-progressbar";
import Layout from "../components/Layout"
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function MyApp({ Component, pageProps, categoriesData }) {
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <NextNProgress />
      <Layout categoriesData={categoriesData}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const groupRes = await axios.get(`${API_URL}api/categories`);
  return {
    ...appProps,
    categoriesData: groupRes.data.response,
  };
};

export default MyApp
