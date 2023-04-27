import { useState } from "react";
import Article from "./Article";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function LatestCourses({ recentCourses }) {
  // post and load more post
  const [posts, setPosts] = useState(recentCourses);
  const [hasMore, setHasMore] = useState(true);

  // LOAD MORE Post
  const getMorePost = async () => {
    const morePostsRes = await axios.get(
      `${API_URL}api/loadMoreCourses/${posts.length}`
    );
    const morePostsData = morePostsRes.data.response;
    if (morePostsData.length == 0) setHasMore(false);
    setPosts((myPost) => [...myPost, ...morePostsData]);
  };
  return (
    <>
      <h1 className="text-xl pb-4 dark:text-gray-200">Latest Courses</h1>

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
                course_title={article.course_title}
                course_slug={article.course_slug}
                course_thumb={article.course_thumb}
                category_name={article.category_name}
                category_slug={article.category_slug}
                published_on={article.publised_date}
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
}

export default LatestCourses;
