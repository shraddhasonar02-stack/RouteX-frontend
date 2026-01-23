import amazon from "../assets/logos/amazon123.svg";
import flipkart from "../assets/logos/flipkart.svg";

const dashboardOrders = [
  { id: 1, source: "Amazon", logo: amazon, pickup: "Bandra", delivery: "Andheri", distance: "12 km", status: "Available" },
  { id: 2, source: "Flipkart", logo: flipkart, pickup: "Powai", delivery: "Thane", distance: "18 km", status: "In Transit" },
];

const Dashboard = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Active Orders</h2>
      <div className="orders-grid">
        {dashboardOrders.map(order => (
          <div key={order.id} className="card order-card">
            <div className="order-header">
              <img src={order.logo} alt={order.source} className="dashboard-logo" />
              <h4>{order.source}</h4>
            </div>
            <div className="order-details">
              <p><strong>Pickup:</strong> {order.pickup}</p>
              <p><strong>Delivery:</strong> {order.delivery}</p>
              <p><strong>Distance:</strong> {order.distance}</p>
              <p><strong>Status:</strong> {order.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;