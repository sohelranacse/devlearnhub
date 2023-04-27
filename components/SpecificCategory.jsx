import Article from "./Article";

function SpecificCategory({ categoryPost, categoryInfo }) {
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto h-full md:pl-2 py-8">
        <h1 className="text-4xl pb-3 text-yellow-500 text-center">
          {categoryInfo.category_name}
        </h1>
        <h3 className="pb-6 text-2xl dark:text-gray-200 text-center">
          {categoryInfo.category_slogan}
        </h3>

        <div className="md:grid grid-cols-4 gap-x-4">
          {categoryPost.map((article, i) => (
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
      </div>
    </section>
  );
}

export default SpecificCategory;
