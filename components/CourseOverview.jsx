/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import TopicsNav from "./TopicsNav";
import { useState, useEffect } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useTheme } from "next-themes";

function CourseOverview({ course }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const sectionList = course.sectionList;
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto h-full md:pl-2 py-8">
        <h1 className="my-2 text-xl md:text-4xl dark:text-gray-200">
          {course.course_title}
        </h1>
        <div className="pb-4">
          <Link
            href={`/category/${course.category_slug}`}
            className="text-yellow-500 hover:text-gray-200 ease-linear duration-150"
          >
            Category: {course.category_name}
          </Link>
          <br />
          <span className="text-slate-400 text-sm">
            Published on: {course.publised_date}
          </span>
        </div>
        <div className="md:grid grid-cols-12 gap-x-4">
          <div className="col-span-4">
            <TopicsNav sectionList={sectionList} activeSlug={``} />
          </div>
          <div className="col-span-8">
            <img
              className="w-full"
              src={`${API_URL}courses/${course.course_image}`}
              alt={course.course_title}
            />
            <div
              className={
                theme == "dark"
                  ? `text-base my-4 dark:text-gray-300 leading-7 textDetailsDark`
                  : `text-base my-4 dark:text-gray-300 leading-7 textDetails`
              }
              dangerouslySetInnerHTML={{ __html: course.overview }}
            ></div>
            {sectionList[0].length && (
              <div className="py-4 px-2 flex justify-end">
                <Link
                  href={`/content/${sectionList[0][0].topics_slug}`}
                  className="flex text-blue-700 text-xl hover:text-blue-400 hover:text-[20px] hover:italic ease-linear duration-350"
                >
                  <svg
                    className="mt-0.5 mr-2 text-2xl"
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"></path>
                  </svg>
                  {sectionList[0][0].topics_title}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CourseOverview;
