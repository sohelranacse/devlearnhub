import Head from "next/head";
import Homepage from "../components/Homepage";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Home({ featured, recent, popular }) {

  return (
    <>
      <Head>
        <title>WebLearnHub</title>
        <meta name="description" content="Experience the power of web development with WebLearnHub." />
      </Head>

      <Homepage featured={featured} recent={recent} popular={popular} />
    </>
  );
}


export const getServerSideProps = async () => {
  const featuredRes = await axios.get(`${API_URL}api/featuredCourse`);
  const recentRes = await axios.get(`${API_URL}api/recentCourse`);
  const popularRes = await axios.get(`${API_URL}api/popularCourse`);
  return {
    props: {
      featured: featuredRes.data.response,
      recent: recentRes.data.response,
      popular: popularRes.data.response,
    },
  };
};