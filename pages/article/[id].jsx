import Head from "next/head";
import axios from "axios";
import ArticleDetails from "../../components/ArticleDetails";
import NotFound from "../../components/common/NotFound";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Article({ postInfo, postHandle }) {
  return (
    <>
      {postHandle ? (
        <>
          <Head>
            <title>{postInfo.post_title}</title>
            <meta name="description" content={postInfo.post_meta_description} />
            <meta name="keyword" content={postInfo.post_meta_keyword} />
          </Head>

          <ArticleDetails postInfo={postInfo} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const postInfoRes = await axios.get(`${API_URL}api/postDetails/${params.id}`);
  return {
    props: {
      postInfo: postInfoRes.data.response,
      postHandle: postInfoRes.data.success,
    },
  };
};
export default Article;
