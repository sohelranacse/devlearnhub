import Link from "next/link";

function Footer({ categoriesData }) {
  return (
    <footer>
      <div className="bg-slate-900 px-2 dark:bg-gray-900">
        <div className="container mx-auto md:grid grid-cols-4 gap-4 pt-8 md:py-8">
          <div className="py-4 md:py-8 pl-2">
            <h3 className="py-4 uppercase text-slate-300">Courses</h3>
            <ul className="text-slate-400 text-sm">
              {categoriesData.length > 0 &&
                categoriesData.map((category, i) => (
                  <li className="py-1" key={i}>
                    <Link
                      href={`/category/${category.category_slug}`}
                      className="hover:text-slate-200 ease-linear duration-100"
                    >
                      {category.category_name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          <div className="py-4 md:py-8 pl-2">
            <h3 className="py-4 uppercase text-slate-300">Our Services</h3>
            <ul className="text-slate-400 text-sm">
              <li className="py-1 hover:text-slate-200 ease-linear duration-100">
                Website Design & Website Development
              </li>
              <li className="py-1 hover:text-slate-200 ease-linear duration-100">
                Website Re-develop / Customization
              </li>
              <li className="py-1 hover:text-slate-200 ease-linear duration-100">
                Database Design
              </li>
              <li className="py-1 hover:text-slate-200 ease-linear duration-100">
                Server Configuration & Support
              </li>
            </ul>
          </div>
          <div className="py-4 md:py-8 pl-2">
            <h3 className="py-4 uppercase text-slate-300">Contact</h3>
            <ul className="text-slate-400 text-sm">
              <li className="py-1 hover:text-slate-200 ease-linear duration-100">
                Address: 57, Kemal Atarturk Aveneue, Banani, Dhaka
              </li>
              <li className="py-1 hover:text-slate-200 ease-linear duration-100">
                Cell no.: +880 1775 326442
              </li>
              <li className="py-1 hover:text-slate-200 ease-linear duration-100">
                Email: info@devlearnhub.com
              </li>
            </ul>
          </div>
          <div className="py-4 md:py-8 pl-2">
            {/* last div */}
            <ul className="flex gap-x-5 md:justify-end md:pt-16">
              <li className="h-8 w-8 bg-slate-300 rounded-full leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center rounded-full inline-block w-full h-full hover:text-white hover:bg-[#3b5998] ease-linear duration-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    className="inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
              </li>
              <li className="h-8 w-8 bg-slate-300 rounded-full leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center rounded-full inline-block w-full h-full hover:text-white hover:bg-[#FF0000] ease-linear duration-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    className="inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </li>
              <li className="h-8 w-8 bg-slate-300 rounded-full leading-[26px]">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center rounded-full inline-block w-full h-full hover:text-white hover:bg-[#0072b1] ease-linear duration-300"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 448 512"
                    className="inline-block"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </li>
            </ul>
            <ul className="flex gap-2 md:justify-end pt-4 pb-2">
              <Link
                href="/about"
                className="hover:text-slate-200 text-sm text-slate-400 ease-linear duration-100"
              >
                About
              </Link>
              <span className="text-slate-400 text-sm">|</span>
              <Link
                href="/sitemap.xml"
                className="hover:text-slate-200 text-sm text-slate-400 ease-linear duration-100"
              >
                Sitemap
              </Link>
              <span className="text-slate-400 text-sm">|</span>
              <Link
                href="/privacy"
                className="hover:text-slate-200 text-sm text-slate-400 ease-linear duration-100"
              >
                Privacy Policy
              </Link>
            </ul>
            <p className="text-slate-400 text-sm md:text-right">
              <Link
                href="/"
                className="hover:text-slate-200 ease-linear duration-100"
              >
                DevLearnHub.com
              </Link>{" "}
              &copy; All Right Reserved {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
