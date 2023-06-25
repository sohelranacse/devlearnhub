/* eslint-disable react/jsx-key */
import TopNavList from "./TopNavList";

function TopicsNav({ sectionList, activeSlug, handleSideNav }) {
  // console.log(sectionList[0].length);
  return (
    <div className="col-span-2 pb-6">
      <h2 className="flex justify-between text-lg bg-gradient-to-b from-gray-300 dark:from-gray-200 px-3 py-2 border-t border-l border-r rounded-sm border-gray-200 dark:border-gray-700 shadow-sm  dark:text-gray-200">
        Course Content
        <svg
          onClick={handleSideNav}
          className="text-2xl cursor-pointer mt-0.5"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"></path>
        </svg>
      </h2>
      <ul className="border border-gray-200 rounded-sm shadow-md dark:border-gray-700">
        {sectionList.length > 0 &&
          sectionList.map((section, i) => (
            <TopNavList
              key={i}
              activeSlug={activeSlug}
              section={section}
              sectionList={sectionList[i]}
            />
          ))}
      </ul>
    </div>
  );
}

export default TopicsNav;
