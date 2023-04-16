import { useState } from "react";
import Article from "./Article";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function SpecificCategory({ categoryPost, categoryInfo }) {
  // post and load more post
  const [posts, setPosts] = useState(categoryPost);
  const [hasMore, setHasMore] = useState(true);

  // LOAD MORE Post
  const getMorePost = async () => {
    const morePostsRes = await axios.get(
      `${API_URL}api/moreCategoryPosts/${categoryInfo.category_slug}/${posts.length}`
    );
    const morePostsData = morePostsRes.data.response;
    if (morePostsData.length == 0) setHasMore(false);
    setPosts((myPost) => [...myPost, ...morePostsData]);
  };

  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto h-full md:pl-2 py-8">
        <h1 className="text-4xl pb-3 text-yellow-500 text-center">
          {categoryInfo.category_name}
        </h1>
        <h3 className="pb-6 text-2xl dark:text-gray-200 text-center">
          {categoryInfo.category_slogan}
        </h3>

        {posts.length > 0 && (
          <InfiniteScroll
            dataLength={posts.length}
            next={getMorePost}
            hasMore={hasMore}
            loader={<h4> Loading...</h4>}
            endMessage={""}
          >
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
          </InfiniteScroll>
        )}
      </div>
    </section>
  );
}

export default SpecificCategory;
