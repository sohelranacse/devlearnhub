/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import axios from "axios";
// import SpecificGroup from "../../components/SpecificGroup";
import NotFound from "../../components/common/NotFound";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Article from "../../components/Article";
import NavSide from "../../components/NavSide";

function Tutorial({ groupPost, groupInfo, groupCategory, groupHandle }) {
  // post and load more post
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setPosts(groupPost);
    setHasMore(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupInfo.group_slug]);

  // LOAD MORE Post
  const getMorePost = async () => {
    const morePostsRes = await axios.get(
      `${API_URL}api/moreGroupPosts/${groupInfo.group_slug}/${posts.length}`
    );
    const morePostsData = morePostsRes.data.response;
    if (morePostsData.length == 0) setHasMore(false);
    setPosts((myPost) => [...myPost, ...morePostsData]);
  };
  return (
    <>
      {groupHandle ? (
        <>
          <Head>
            <title>{groupInfo.group_name}</title>
            <meta name="description" content={groupInfo.meta_description} />
            <meta name="keyword" content={groupInfo.meta_keyword} />
          </Head>

          <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
            <div className="container mx-auto h-full">
              <h1 className="text-4xl pb-3 text-yellow-500 pt-8 text-center">
                {groupInfo.group_name}
              </h1>
              <h3 className="pb-6 text-2xl dark:text-gray-200 text-center">
                {groupInfo.group_slogan}
              </h3>
              <div className="md:grid grid-cols-12">
                <NavSide categories={groupCategory} />
                <div className="col-span-9 h-full md:pl-2 py-6 md:pr-6">
                  {posts.length > 0 && (
                    <InfiniteScroll
                      dataLength={posts.length}
                      next={getMorePost}
                      hasMore={hasMore}
                      loader={<h4> Loading...</h4>}
                      endMessage={""}
                    >
                      <div className="md:grid grid-cols-2 gap-x-4">
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
                    </InfiniteScroll>
                  )}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const groupPostRes = await axios.get(
    `${API_URL}api/getPostByGroup/${params.id}`
  );
  const groupInfoRes = await axios.get(
    `${API_URL}api/groupInformation/${params.id}`
  );
  const groupCategoryRes = await axios.get(
    `${API_URL}api/groupCategory/${params.id}`
  );
  return {
    props: {
      groupPost: groupPostRes.data.response,
      groupInfo: groupInfoRes.data.response,
      groupCategory: groupCategoryRes.data.response,
      groupHandle: groupInfoRes.data.success,
    },
  };
};
export default Tutorial;
