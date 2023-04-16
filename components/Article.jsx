import Link from "next/link";
function Article({
  post_title,
  post_slug,
  description,
  category_icon,
  category_name,
  category_slug,
  published_on,
}) {
  return (
    <div className="mb-5 border rounded shadow-md p-4 dark:border-gray-700">
      <h1 className="text-lg">
        <Link
          href={`/article/${post_slug}`}
          className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
        >
          {post_title}
        </Link>
      </h1>
      <p className="pt-1 pb-2 text-justify dark:text-gray-400">
        {description}{" "}
        <Link
          href={`/article/${post_slug}`}
          className="italic text-slate-500 hover:text-blue-400 ease-linear duration-150"
        >
          read more
        </Link>
      </p>
      <div className="flex flex-wrap justify-between">
        <Link
          href={`/category/${category_slug}`}
          className="flex flex-wrap text-yellow-500 hover:text-blue-700 ease-linear duration-150"
        >
          <div
            className="font-bold text-lg pt-0.5"
            dangerouslySetInnerHTML={{ __html: category_icon }}
          ></div>{" "}
          <span className="text-sm font-normal">{category_name}</span>
        </Link>
        <span className="text-xs text-slate-400 italic">{published_on}</span>
      </div>
    </div>
  );
}

export default Article;
