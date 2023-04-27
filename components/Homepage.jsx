import FeaturedSlider from "./FeaturedSlider";
import LatestCourses from "./LatestCourses";
import SidebarPost from "./SidebarPost";

function Homepage({ featured, recent, popular }) {
  return (
    <section className="mt-14 min-h-screen dark:bg-gray-800">
      <div className="px-2 container mx-auto">
        <FeaturedSlider featured={featured} />
        <div className="md:grid grid-cols-12 gap-4">
          <div className="col-span-9 h-full pt-6 pb-2">
            <LatestCourses recentCourses={recent} />
          </div>

          {/* right side */}
          <div className="col-span-3 pb-6 md:py-6">
            <SidebarPost name={`Popular`} sidebarArticles={popular} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Homepage;
