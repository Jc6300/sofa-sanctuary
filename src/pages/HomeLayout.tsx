import { Header } from "@/components/ui";
import { Outlet } from "react-router-dom";
function HomeLayout() {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <div className="align-element py-20">
        <Outlet />
      </div>
    </>
  );
}
export default HomeLayout;
