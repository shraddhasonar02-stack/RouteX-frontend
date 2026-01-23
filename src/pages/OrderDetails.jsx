import mapImg from "../assets/maps/map-placeholder.svg";

export default function OrderDetails() {
  return (
    <div className="bg-[#0B0F1A] min-h-screen p-6">
      <h2 className="text-white text-xl mb-4">Order Route</h2>

      <div className="bg-[#121829] p-6 rounded-xl">
        <img
          src={mapImg}
          alt="Map Preview"
          className="w-full h-64 object-contain rounded-lg"
        />
      </div>
    </div>
  );
}