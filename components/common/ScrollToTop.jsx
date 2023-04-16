import React, { useEffect } from "react";

const ScrollToTop = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollToTopButton = document.querySelector(".scroll-to-top");

      if (scrollTop > 200) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    });
  }, []);

  return (
    <button
      onClick={handleClick}
      className="scroll-to-top bg-yellow-500 text-white fixed bottom-5 right-5 rounded-full inline-block w-12 h-12 hover:bg-yellow-600 ease-linear duration-300"
    >
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="inline-block text-2xl"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"></path>
      </svg>
    </button>
  );
};

export default ScrollToTop;
