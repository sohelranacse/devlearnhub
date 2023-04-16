import Head from "next/head";
import Link from "next/link";

function NotFound() {
  return (
    <>
      <Head>
        <title>404 | DevLearnHub</title>
        <meta
          name="description"
          content="Experience the power of web development with DevLearnHub"
        />
      </Head>

      <section className="px-2 mt-14 h-screen dark:bg-gray-800">
        <div className="container mx-auto pt-28 text-center">
          <h1 className="text-5xl pb-3 dark:text-gray-200">
            404 - Page Not Found
          </h1>
          <p className="text-lg py-4 dark:text-gray-200">
            Sorry, the page you are looking for does not exist.
          </p>
          <Link
            className="border border-yellow-500 bg-yellow-500 text-white rounded px-12 py-2 my-2 inline-block hover:bg-white hover:text-yellow-500 dark:hover:bg-gray-800 ease-linear duration-150"
            href="/"
          >
            Back
          </Link>
        </div>
      </section>
    </>
  );
}

export default NotFound;
