import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {
  return (
    <div className="flex flex-col gap-4">
      <Header />
      <div className="min-h-screen p-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
