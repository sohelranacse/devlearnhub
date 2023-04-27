import FeaturedArticles from "./FeaturedArticles";
import LatestCourses from "./LatestCourses";
import SidebarPost from "./SidebarPost";

function Homepage({ featured, recent, popular }) {
  return (
    <section className="px-2 mt-14 min-h-screen dark:bg-gray-800">
      {/* <FeaturedArticles featured={featured} /> */}

      <div className="container mx-auto md:grid grid-cols-12">
        <div className="col-span-9 h-full py-6 md:px-6">
          <LatestCourses recentCourses={recent} />
        </div>

        {/* right side */}
        <div className="col-span-3 py-6">
          <SidebarPost name={`Popular`} sidebarArticles={popular} />
        </div>
      </div>
    </section>
  );
}

export default Homepage;
