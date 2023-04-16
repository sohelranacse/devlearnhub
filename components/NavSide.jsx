import Link from "next/link";

function NavSide({ categories }) {
  return (
    <div className="col-span-2 py-6">
      <ul>
        {categories.length > 0 &&
          categories.map((category, i) => (
            <li key={i}>
              <Link
                className="py-2 flex gap-2 hover:bg-slate-100 hover:text-blue-700 border-r-2 border-transparent hover:border-yellow-400 px-2 dark:text-gray-200 dark:hover:bg-gray-600"
                href={`/category/${category.category_slug}`}
                passHref
              >
                <span
                  className="text-yellow-500 font-bold text-2xl"
                  dangerouslySetInnerHTML={{ __html: category.category_icon }}
                ></span>
                {category.category_name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default NavSide;
