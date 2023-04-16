/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
import Dark from "./Dark";
const PF = process.env.NEXT_PUBLIC_PF;
import { useTheme } from "next-themes";
import Router from "next/router";

function Header({ groupData }) {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const [query, setQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const logoSrc = theme === "dark" ? `${PF}logo-dark.png` : `${PF}logo.png`;

  const handleNav = () => {
    setNav(!nav);
  };
  const handleSearch = () => {
    setSearch(!search);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query !== "") {
      if (query.length < 4) alert("Please type atleast 3 characters.");
      else Router.push(`/search?q=${query}`);
    }
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <nav className="w-full fixed top-0 z-10 shadow-md bg-slate-100 px-2 border-t-[3.5px] border-yellow-400 dark:bg-gray-900 dark:text-gray-200">
      <div className="container mx-auto h-14 grid grid-cols-12">
        <div className="col-span-8 md:col-span-6 flex md:justify-between">
          {/* menu icon */}
          {nav ? (
            <svg
              role="button"
              onClick={handleNav}
              className="mx-2 md:hidden text-2xl my-4 text-yellow-500"
              stroke="currentColor"
              fill="none"
              strokeWidth="0"
              viewBox="0 0 15 15"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              role="button"
              onClick={handleNav}
              className="mx-2 md:hidden text-2xl my-4 text-yellow-500"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          )}

          {/* logo */}
          <Link
            href="/"
            className="block pl-2 py-4 md:py-[10px] ease-linear duration-100 h-full"
          >
            <img src={logoSrc} className="w-32 md:w-40" alt={"logo"} />
          </Link>

          {/* menu */}
          <ul className="hidden md:flex justify-between py-2">
            <li className="text-center">
              <Link
                href="/"
                className="flex gap-2 py-2 px-4 hover:bg-slate-200 hover:rounded ease-linear duration-150 dark:hover:bg-gray-500"
              >
                <span className="font-bold text-xl mt-0.5">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                Home
              </Link>
            </li>
            <li className="text-center relative group">
              <span className="cursor-pointer flex gap-2 py-2 px-4 hover:bg-slate-200 hover:rounded ease-linear duration-150 dark:hover:bg-gray-500">
                <span className="font-bold text-lg mt-1">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc></desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="5" cy="5" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="19" cy="5" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="19" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                    <circle cx="19" cy="19" r="1"></circle>
                  </svg>
                </span>
                Full Stack Development
                <span className="font-bold text-xl mt-0.5">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
                </span>
              </span>
              <ul className="absolute hidden bg-slate-100 dark:bg-gray-900 dark:text-white pt-2 rounded group-hover:block ease-linear duration-150">
                {groupData.length > 0 &&
                  groupData.map((group, i) => (
                    <li className="text-center" key={i}>
                      <Link
                        href={`/tutorial/${group.group_slug}`}
                        className="block py-2 px-2 hover:bg-slate-200 ease-linear duration-150 dark:hover:bg-gray-500"
                      >
                        {group.group_name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </li>
          </ul>
        </div>
        <div className="col-span-4 md:col-span-6 ml-2 flex justify-end gap-2">
          <form
            className="hidden md:flex h-10 w-full border my-2 border-slate-300 rounded-sm hover:border-yellow-400 dark:border-gray-700 dark:hover:border-gray-400 ease-linear duration-150"
            onSubmit={handleSubmit}
          >
            <button
              type="submit"
              className="bg-white pointer-events-none text-slate-400 font-bold text-lg px-4 dark:bg-gray-800"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
            <input
              type="text"
              value={query}
              onChange={handleChange}
              placeholder="Search..."
              className="w-full bg-white focus:outline-none dark:bg-gray-800"
              required
            />
          </form>

          {search ? (
            <svg
              role="button"
              onClick={handleSearch}
              className="block md:hidden text-2xl my-4 text-yellow-500 dark:text-slate-200"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 0 0-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
              <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
            </svg>
          ) : (
            <svg
              role="button"
              onClick={handleSearch}
              className="block md:hidden text-2xl my-4 text-yellow-500 dark:text-slate-200"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="none"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
              ></path>
              <path
                fill="none"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M338.29 338.29L448 448"
              ></path>
            </svg>
          )}
          <Dark />
        </div>
      </div>

      {/* mobile search */}
      {search && (
        <div className="col-span-12 text-sm">
          <form
            className="flex h-10 w-full border mb-1 border-slate-300 rounded-sm hover:border-yellow-400 dark:border-gray-700 dark:hover:border-gray-400 ease-linear duration-150"
            onSubmit={handleSubmit}
          >
            <button
              type="submit"
              className="bg-white pointer-events-none text-slate-400 font-bold text-lg px-4 dark:bg-gray-800"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
              className="w-full bg-white focus:outline-none dark:bg-gray-800"
              required
            />
          </form>
        </div>
      )}

      {/* mobile nav */}
      {nav && (
        <div className="col-span-12 text-sm">
          <ul className="pb-2 bg-slate-100 dark:bg-gray-900 ease-linear duration-150">
            <li onClick={handleNav}>
              <Link
                href="/"
                className="block py-2 px-2 hover:bg-slate-200 ease-linear duration-150 dark:text-gray-200 dark:hover:bg-gray-500"
              >
                Home
              </Link>
            </li>
            {groupData.length > 0 &&
              groupData.map((group, i) => (
                <li key={i} onClick={handleNav}>
                  <Link
                    href={`/tutorial/${group.group_slug}`}
                    className="block py-2 px-2 hover:bg-slate-200 ease-linear duration-150 dark:text-gray-200 dark:hover:bg-gray-500"
                  >
                    {group.group_name}
                  </Link>
                </li>
              ))}
            <li onClick={handleNav}>
              <Link
                href="/"
                className="block py-2 px-2 hover:bg-slate-200 ease-linear duration-150 dark:text-gray-200 dark:hover:bg-gray-500"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Header;
