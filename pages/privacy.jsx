import Head from "next/head";

export default function about() {
  return (
    <>
      <Head>
        <title>Privacy | WebLearnHub</title>
        <meta
          name="description"
          content="Experience the power of web development with WebLearnHub"
        />
      </Head>

      <section className="px-2 mt-14 h-screen dark:bg-gray-800">
        <div className="container mx-auto pt-8">
          <h1 className="text-4xl pb-3 dark:text-gray-200">Privacy</h1>
          <p className=" dark:text-gray-200">This is Privacy page</p>
        </div>
      </section>
    </>
  );
}
