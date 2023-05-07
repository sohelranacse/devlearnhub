/* eslint-disable react/jsx-key */
import Link from "next/link";

function TopicsNav({ sectionList, activeSlug }) {
  // console.log(sectionList[0].length);
  return (
    <div className="col-span-2 pb-6">
      <h2 className="text-lg bg-gradient-to-b from-gray-300 dark:from-gray-200 px-3 py-2 border-t border-l border-r rounded-sm border-gray-200 dark:border-gray-700 shadow-sm  dark:text-gray-200">
        Course Content
      </h2>
      <ul className="border border-gray-200 rounded-sm shadow-md dark:border-gray-700">
        {sectionList.length > 0 &&
          sectionList.map((section, i) => (
            <li key={i}>
              <p className="py-2 px-3 bg-gradient-to-r from-yellow-100 dark:from-yellow-50 font-bold border-t border-b border-yellow-300 dark:border-gray-900 dark:bg-gray-500">
                {section[0].section_name}
              </p>
              <ul>
                {sectionList[i].map((topics, j) => (
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
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TopicsNav;
