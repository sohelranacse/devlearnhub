import Link from "next/link";

function TopicsNav({ topicsList, activeSlug }) {
  return (
    <div className="col-span-2 pb-2">
      <h2 className="text-lg px-3 py-2 border-t border-l border-r rounded-sm border-gray-200 dark:border-gray-700 shadow-sm  dark:text-gray-200 uppercase">
        Course Content
      </h2>
      <ul className="border border-gray-200 rounded-sm shadow-md dark:border-gray-700">
        {topicsList.length > 0 &&
          topicsList.map((topics, i) => (
            <li key={i}>
              <Link
                className={
                  activeSlug === topics.topics_slug
                    ? `py-1.5 px-3 flex gap-2 bg-slate-100 text-blue-700 border-r-2 border-transparent border-yellow-400 dark:text-gray-200 dark:bg-gray-600`
                    : `py-1.5 px-3 flex gap-2 hover:bg-slate-100 hover:text-blue-700 border-r-2 border-transparent hover:border-yellow-400 dark:text-gray-200 dark:hover:bg-gray-600`
                }
                href={`/content/${topics.topics_slug}`}
                passHref
              >
                {i + 1}.{` `}
                {topics.topics_title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TopicsNav;
