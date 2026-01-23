import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 style={{ marginBottom: "20px" }}>RouteX</h2>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/analytics">Analytics</Link>
    </div>
  );
};

export default Sidebar;