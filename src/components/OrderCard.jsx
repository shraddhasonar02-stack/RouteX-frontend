const OrderCard = ({ order }) => {
  return (
    <div className="card order-card">
      <div className="order-header">
        <img src={order.logo} alt={order.source} className="order-logo" />
        <h4>{order.source}</h4>
      </div>
      <div className="order-details">
        <p><strong>Pickup:</strong> {order.pickup}</p>
        <p><strong>Delivery:</strong> {order.delivery}</p>
        <p><strong>Distance:</strong> {order.distance}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>
    </div>
  );
};

export default OrderCard;