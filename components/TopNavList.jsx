import Link from "next/link";
import { useState } from "react";

function TopNavList({ activeSlug, section, sectionList }) {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <li>
      <p
        className="flex justify-between py-2 px-3 bg-gradient-to-r from-yellow-100 dark:from-yellow-50 font-bold border-t border-b border-yellow-300 dark:border-gray-900 dark:bg-gray-500 cursor-pointer"
        onClick={() => setShowInfo(!showInfo)}
      >
        <span className="flex">
          <svg
            className="font-bold mt-1 mr-2"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z"></path>
          </svg>
          {section[0].section_name}
        </span>
        {showInfo ? (
          <svg
            className="font-bold mt-1"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        ) : (
          <svg
            className="font-bold mt-1"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        )}
      </p>
      {/* {showInfo && ( */}
      <ul className={showInfo ? "block" : "hidden"}>
        {sectionList.map((topics, j) => (
          <li key={j}>
            <Link
              className={
                activeSlug === topics.topics_slug
                  ? `inline-block w-full font-bold py-1.5 px-3 bg-slate-100 text-blue-700 border-r-4 border-transparent border-yellow-400 dark:text-blue-500 dark:bg-gray-600`
                  : `inline-block w-full py-1.5 px-3 hover:bg-slate-100 hover:text-blue-700 border-r-4 border-transparent hover:border-yellow-400 hover:font-bold dark:text-gray-200 dark:hover:text-blue-500 dark:hover:bg-gray-600`
              }
              href={`/content/${topics.topics_slug}`}
              passHref
            >
              {j + 1}.{` `}
              {topics.topics_title}
            </Link>
          </li>
        ))}
      </ul>
      {/* )} */}
    </li>
  );
}

export default TopNavList;
