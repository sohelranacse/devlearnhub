import Article from "./Article";

function FeaturedArticles({ featured }) {
  return (
    <>
      <h1 className="text-xl pb-4 dark:text-gray-200">Featured Articles</h1>
      <div className="md:grid grid-cols-2 gap-x-4">
        {featured.length > 0 &&
          featured.map((article, i) => (
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
    </>
  );
}

export default FeaturedArticles;
