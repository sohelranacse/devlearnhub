/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
function ArticleSlider({
  course_title,
  course_slug,
  course_thumb,
  category_name,
  category_slug,
  published_on,
}) {
  return (
    <div className="relative">
      <img
        className="w-full rounded md:rounded-none"
        src={`${API_URL}courses/${course_thumb}`}
        alt={course_title}
      />
      <div className="absolute w-full bg-slate-900/50 top-0 bottom-0 rounded md:rounded-none"></div>
      <div className="absolute top-[5%] md:top-[30%] left-[8%] right-[8%]">
        <h1 className="text-lg md:text-2xl mt-2">
          <Link
            href={`/course/${course_slug}`}
            className="text-gray-200 hover:text-blue-400 ease-linear duration-150 relative"
          >
            {course_title}
          </Link>
        </h1>
        <Link
          href={`/category/${category_slug}`}
          className="text-sm text-yellow-500 hover:text-blue-700 ease-linear duration-150"
        >
          {category_name}
        </Link>
        <div className="hidden md:block text-xs my-1 text-slate-200 italic">
          Published On: {published_on}
        </div>
      </div>
    </div>
  );
}

export default ArticleSlider;
