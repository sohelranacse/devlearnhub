import Head from "next/head";
import axios from "axios";
import SpecificCategory from "../../components/SpecificCategory";
import NotFound from "../../components/common/NotFound";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Category({ categoryPost, categoryInfo, categoryHandle }) {
  return (
    <>
      {categoryHandle ? (
        <>
          <Head>
            <title>{categoryInfo.category_name}</title>
            <meta
              name="description"
              content={categoryInfo.category_description}
            />
            <meta name="keyword" content={categoryInfo.category_keyword} />
          </Head>
          <SpecificCategory
            categoryPost={categoryPost}
            categoryInfo={categoryInfo}
          />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const categoryPostRes = await axios.get(
    `${API_URL}api/getPostByCategory/${params.id}`
  );
  const categoryInfoRes = await axios.get(
    `${API_URL}api/categoryInformation/${params.id}`
  );
  return {
    props: {
      categoryPost: categoryPostRes.data.response,
      categoryInfo: categoryInfoRes.data.response,
      categoryHandle: categoryInfoRes.data.success,
    },
  };
};
export default Category;
