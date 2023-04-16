import Header from "./common/Header";
import Footer from "./common/Footer";
import ScrollToTop from "./common/ScrollToTop";

const Layout = ({ children, groupData }) => {
  return (
    <>
      <Header groupData={groupData} />
      {children}
      <Footer groupData={groupData} />
      <ScrollToTop />
    </>
  );
};

export default Layout;
