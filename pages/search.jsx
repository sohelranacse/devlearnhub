import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import Article from "../components/Article";
import NotFound from "../components/common/NotFound";

export default function Home() {
  const router = useRouter();

  const quaryData = router.query.q;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // console.log("length " + quaryData.length)
    if (typeof quaryData === "string" && quaryData.length > 3) {
      const queryPosts = async () => {
        const filterPostRes = await axios.get(
          `${API_URL}api/findPost?search=${quaryData}`
        );
        const filterPostData = filterPostRes.data.response;
        // console.log(filterPostData)
        setPosts(filterPostData);
      };
      queryPosts();
    }
  }, [quaryData]);
  if (Object.keys(router.query).length == 0) return <NotFound />;
  return (
    <>
      <Head>
        <title>Search - {quaryData}</title>
        <meta
          name="description"
          content="Experience the power of web development with DevLearnHub."
        />
      </Head>
      <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
        <div className="container mx-auto h-full">
          <h1 className="text-4xl pb-3 text-yellow-500 pt-8 my-2">
            Search keyword - {quaryData}
          </h1>
          {posts.length > 0 && (
            <div className="md:grid grid-cols-3 gap-x-4">
              {posts.map((article, i) => (
                <Article
                  key={i}
                  post_title={article.post_title}
                  post_slug={article.post_slug}
                  description={article.description}
                  category_icon={article.category_icon}
                  category_name={article.category_name}
                  category_slug={article.category_slug}
                  published_on={article.post_date}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
