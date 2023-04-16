import { useState } from "react";
import Article from "./Article";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function RecentArticle({ recentPost }) {
  // post and load more post
  const [posts, setPosts] = useState(recentPost);
  const [hasMore, setHasMore] = useState(true);

  // LOAD MORE Post
  const getMorePost = async () => {
    const morePostsRes = await axios.get(
      `${API_URL}api/loadMore/${posts.length}`
    );
    const morePostsData = morePostsRes.data.response;
    if (morePostsData.length == 0) setHasMore(false);
    setPosts((myPost) => [...myPost, ...morePostsData]);
  };
  return (
    <>
      <h1 className="text-xl pb-4 dark:text-gray-200">Recent Articles</h1>
      <div>
        {posts.length > 0 && (
          <InfiniteScroll
            dataLength={posts.length}
            next={getMorePost}
            hasMore={hasMore}
            loader={<h4> Loading...</h4>}
            endMessage={""}
          >
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
          </InfiniteScroll>
        )}
      </div>
    </>
  );
}

export default RecentArticle;
