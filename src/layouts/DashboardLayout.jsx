import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import "../App.css";  // make sure App.css has the layout styles

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <Sidebar />
      <div className="dashboard-main">
        <Navbar />
        <div className="dashboard-content">
          <Outlet />  {/* Renders Dashboard / Orders / Analytics */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;