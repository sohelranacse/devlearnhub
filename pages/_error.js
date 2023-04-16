function Error({ statusCode }) {
  return (
    <section className="px-2 mt-14 h-screen dark:bg-gray-800">
      <div className="container mx-auto pt-28 text-center">
        <h1 className="text-5xl pb-3 dark:text-gray-200">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </h1>
        <p className="text-lg py-4 dark:text-gray-200">Please check your internet connection and try again.</p>
      </div>
    </section>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
