import UpperBody from "./UpperBody";
import LastSection from "./LastSection";
import MiddleSection from "./MiddleSection";

const Layout = () => {
  return (
    <div
      className="bg-black"
    >
      <UpperBody />
      <MiddleSection />
      <LastSection />
    </div>
  );
};

export default Layout;