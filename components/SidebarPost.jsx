/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function SidebarPost({ name, sidebarArticles }) {
  return (
    <>
      <h1 className="text-xl pl-2 dark:text-gray-200">{name} Courses</h1>
      <ul className="rounded border shadow-md my-4 dark:border-gray-700">
        {sidebarArticles.length > 0 &&
          sidebarArticles.map((article, i) => (
            <li className="px-2" key={i}>
              <Link
                href={`/course/${article.course_slug}`}
                className="flex items-center gap-1 py-2 border-b border-gray-200 dark:border-gray-700 text-blue-700 hover:text-blue-400 ease-linear duration-150"
              >
                <img
                  className="h-10 rounded-sm"
                  src={`${API_URL}courses/${article.course_thumb}`}
                  alt={article.course_title}
                />
                <h1 className="text-sm">{article.course_title}</h1>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}

export default SidebarPost;
