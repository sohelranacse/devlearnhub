import Head from "next/head";
import Homepage from "../components/Homepage";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ categories, featured, recent, popular }) {

  return (
    <>
      <Head>
        <title>DevLearnHub</title>
        <meta name="description" content="Experience the power of web development with DevLearnHub." />
      </Head>

      <Homepage categories={categories} featured={featured} recent={recent} popular={popular} />
    </>
  );
}


export const getServerSideProps = async () => {
  const categoryRes = await axios.get(`${API_URL}api/categories`);
  const featuredRes = await axios.get(`${API_URL}api/featuredPost`);
  const recentRes = await axios.get(`${API_URL}api/recentPost`);
  const popularRes = await axios.get(`${API_URL}api/popularPost`);
  return {
    props: {
      categories: categoryRes.data.response,
      featured: featuredRes.data.response,
      recent: recentRes.data.response,
      popular: popularRes.data.response,
    },
  };
};