import { orders } from "../data/orders";
import OrderCard from "../components/OrderCard";

const Orders = () => {
  return (
    <div>
      <h2 style={{ marginBottom: "20px" }}>Active Orders</h2>
      <div className="orders-grid">
        {orders.map(order => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default Orders;