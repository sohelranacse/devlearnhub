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
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const sectionList = course.sectionList;
  const nextTopics = course.nextTopics;
  const TopicsDetails = course.TopicsDetails;
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto h-full md:pl-2 py-8">
        <div className="md:grid grid-cols-12 gap-x-4">
          <div className="col-span-4">
            <TopicsNav
              sectionList={sectionList}
              activeSlug={course.topics_slug}
            />
          </div>
          <div className="col-span-8">
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
