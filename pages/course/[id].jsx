import Head from "next/head";
import axios from "axios";
import CourseOverview from "../../components/CourseOverview";
import NotFound from "../../components/common/NotFound";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

function Course({ course, courseHandle }) {
  return (
    <>
      {courseHandle ? (
        <>
          <Head>
            <title>{course.course_title}</title>
            <meta name="description" content={course.course_meta_description} />
            <meta name="keyword" content={course.course_meta_keyword} />
          </Head>
          <CourseOverview course={course} />
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const courseRes = await axios.get(`${API_URL}api/courseTopics/${params.id}`);
  return {
    props: {
      course: courseRes.data.response,
      courseHandle: courseRes.data.success,
    },
  };
};
export default Course;
