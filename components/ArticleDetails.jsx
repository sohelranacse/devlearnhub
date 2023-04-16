/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import SidebarPost from "./SidebarPost";
import MyCode from "./MyCode";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { useTheme } from "next-themes";

function ArticleDetails({ postInfo }) {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const postDetails = postInfo.postDetails;
  const sidebarArticles = postInfo.relatedPost;
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      <div className="container mx-auto md:grid grid-cols-12 h-full">
        <div className="col-span-9 h-full md:pl-2 py-6 md:pr-6">
          <h1 className="mt-2 text-xl md:text-4xl pb-3 dark:text-gray-200">
            {postInfo.post_title}
          </h1>
          <div className="md:flex space-y-2 flex-wrap justify-between pb-4">
            <Link
              href={`/category/${postInfo.category_slug}`}
              className="flex flex-wrap text-yellow-500 hover:text-gray-200 ease-linear duration-150"
            >
              <div
                className="font-bold text-xl pt-0.5 pr-1"
                dangerouslySetInnerHTML={{ __html: postInfo.category_icon }}
              ></div>{" "}
              <span className=" font-normal">{postInfo.category_name}</span>
            </Link>
            <span className="text-slate-400 text-sm flex">
              Total Views: {postInfo.hit}
            </span>
            <span className="text-slate-400 text-sm flex md:italic">
              Published on: {postInfo.post_date}
            </span>
          </div>

          {/* post description */}
          <div className="dark:text-gray-300 leading-7">
            {postInfo.description}
          </div>

          {/* post details */}
          {postDetails.length > 0 &&
            postDetails.map((post, i) =>
              post.post_type == 1 ? (
                <div
                  key={i}
                  className={
                    theme == "dark"
                      ? `my-4 dark:text-gray-300 leading-7 textDetailsDark`
                      : `my-4 dark:text-gray-300 leading-7 textDetails`
                  }
                  dangerouslySetInnerHTML={{ __html: post.post_details }}
                ></div>
              ) : post.post_type == 2 ? (
                <div key={i} className="my-4">
                  <MyCode
                    code={post.post_details}
                    language={post.post_details_title}
                  />
                </div>
              ) : (
                <div key={i} className="my-4">
                  <img
                    src={`${API_URL}posts/${post.post_image}`}
                    alt={postInfo.post_title}
                  />
                </div>
              )
            )}
          {/* post details end */}
        </div>

        {/* right side */}
        <div className="col-span-3 h-full py-6">
          <SidebarPost name={`Related`} sidebarArticles={sidebarArticles} />
        </div>

        {sidebarArticles.length && (
          <div className="py-4 px-2">
            <Link
              href={`/article/${sidebarArticles[0].post_slug}`}
              className="flex gap-1 text-blue-700 text-xl hover:text-blue-400 ease-linear duration-150"
            >
              NEXT
              <span className="font-bold text-2xl pt-0.5">
                <svg
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
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default ArticleDetails;
