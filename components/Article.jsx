/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
function Article({
  course_title,
  course_slug,
  course_thumb,
  category_name,
  category_slug,
  published_on,
}) {
  return (
    <div className="mb-5 border rounded shadow-md p-4 dark:border-gray-700">
      <Link
        href={`/course/${course_slug}`}
        className="text-blue-700 hover:text-blue-400 ease-linear duration-150"
      >
        <img
          className="rounded-sm"
          src={`${API_URL}courses/${course_thumb}`}
          alt={course_title}
        />
        <h1 className="text-lg my-3">{course_title}</h1>
      </Link>
      <div className="flex flex-wrap justify-between">
        <Link
          href={`/category/${category_slug}`}
          className="text-sm text-yellow-500 hover:text-blue-700 ease-linear duration-150"
        >
          {category_name}
        </Link>
        <span className="text-xs my-1 text-slate-400 italic">
          {published_on}
        </span>
      </div>
    </div>
  );
}

export default Article;
