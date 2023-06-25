/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import TopicsNav from "./TopicsNav";
import { useState, useEffect } from "react";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useTheme } from "next-themes";
import ShowCode from "./ShowCode";
import NextContent from "./NextContent";

function ContentDetails({ course }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(true);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const sectionList = course.sectionList;
  const nextTopics = course.nextTopics;
  const TopicsDetails = course.TopicsDetails;

  const handleSideNav = () => {
    if (open) setOpen(false);
    else setOpen(true);
  };
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto h-full md:pl-2 py-8">
        <div className="md:grid grid-cols-12 gap-x-4">
          {open ? (
            <div className="col-span-4">
              <TopicsNav
                sectionList={sectionList}
                activeSlug={course.topics_slug}
                handleSideNav={handleSideNav}
              />
            </div>
          ) : (
            <svg
              onClick={handleSideNav}
              className="text-2xl cursor-pointer mb-5 dark:text-gray-200"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path>
            </svg>
          )}
          <div className={open ? "col-span-8" : "col-span-12"}>
            <h1 className="mb-2 text-xl md:text-4xl dark:text-gray-200">
              {course.topics_title}
            </h1>
            <div className="pb-2 border-b dark:border-gray-700">
              <Link
                href={`/course/${course.course_slug}`}
                className="text-yellow-500 hover:text-gray-200 ease-linear duration-150"
              >
                Course: {course.course_title}
              </Link>
            </div>
            {/* post details */}
            {TopicsDetails.length > 0 &&
              TopicsDetails.map((topics, i) =>
                topics.topics_type == 1 ? (
                  <div
                    key={i}
                    className={
                      theme == "dark"
                        ? `text-base my-4 dark:text-gray-300 leading-7 textDetailsDark`
                        : `text-base my-4 dark:text-gray-300 leading-7 textDetails`
                    }
                    dangerouslySetInnerHTML={{ __html: topics.topics_details }}
                  ></div>
                ) : topics.topics_type == 2 ? (
                  <div key={i} className="my-4">
                    <ShowCode
                      language={topics.topics_details_title}
                      myCode={topics.topics_details}
                    />
                  </div>
                ) : (
                  <div key={i} className="my-4">
                    <img
                      src={`${API_URL}courses/topics/${topics.topics_details}`}
                      alt={topics.topics_details_title}
                    />
                  </div>
                )
              )}
            {/* post details end */}

            {nextTopics && (
              <NextContent
                topics_title={nextTopics.topics_title}
                topics_slug={nextTopics.topics_slug}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentDetails;
