import Link from "next/link";

function SidebarPost({ name, sidebarArticles }) {
  return (
    <>
      <h1 className="text-xl pl-2 dark:text-gray-200">{name} Articles</h1>
      <ul className="py-3 pl-2 rounded border shadow-md my-4 dark:border-gray-700">
        {sidebarArticles.length > 0 &&
          sidebarArticles.map((article, i) => (
            <li className="py-2 pr-2" key={i}>
              <h1 className="font-normal">
                <Link
                  href={`/article/${article.post_slug}`}
                  className="flex gap-1 text-blue-700 hover:text-blue-400 ease-linear duration-150"
                >
                  <span
                    className="text-yellow-500 font-bold text-2xl pt-0.5"
                    dangerouslySetInnerHTML={{ __html: article.category_icon }}
                  ></span>
                  {article.post_title}
                </Link>
              </h1>
            </li>
          ))}
      </ul>
    </>
  );
}

export default SidebarPost;
