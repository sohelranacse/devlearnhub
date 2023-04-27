import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTop from "./common/ScrollToTop";

const Layout = ({ children, categoriesData }) => {
  return (
    <>
      <Header categoriesData={categoriesData} />
      {children}
      <Footer categoriesData={categoriesData} />
      <ScrollToTop />
    </>
  );
};

export default Layout;
