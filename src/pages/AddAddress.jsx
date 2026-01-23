import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function AddAddress() {
  const [lat, setLat] = useState(19.076);
  const [lng, setLng] = useState(72.8777);
  const [address, setAddress] = useState("");

  const handleMove = (evt) => {
    setLat(evt.viewState.latitude);
    setLng(evt.viewState.longitude);
  };

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-xl mb-4">Add Delivery Address</h1>

      {/* ADDRESS INPUT */}
      <input
        type="text"
        placeholder="Enter delivery address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-3 rounded bg-gray-900 border border-gray-700 mb-4"
      />

      {/* MAP */}
      <div className="h-[320px] rounded overflow-hidden">
        <Map
          initialViewState={{
            latitude: lat,
            longitude: lng,
            zoom: 14,
          }}
          onMove={handleMove}
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/dark-v11"
        >
          <Marker latitude={lat} longitude={lng} />
        </Map>
      </div>

      {/* COORDINATES */}
      <div className="mt-4 bg-gray-900 p-4 rounded text-sm">
        <p>Latitude: {lat.toFixed(6)}</p>
        <p>Longitude: {lng.toFixed(6)}</p>
      </div>

      {/* SAVE BUTTON */}
      <button
        className="mt-4 w-full bg-green-600 py-3 rounded font-semibold"
        onClick={() =>
          console.log({
            address,
            latitude: lat,
            longitude: lng,
          })
        }
      >
        Confirm Address
      </button>
    </div>
  );
}
