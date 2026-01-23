import { useState } from "react";

export default function TestLocation() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [error, setError] = useState("");

  const getLocation = () => {
    // Check if browser supports location
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    // Ask for location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        setError("");
      },
      () => {
        setError("Permission denied or error");
      }
    );
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white gap-6">
      <h1 className="text-2xl font-bold">Location Test</h1>

      <button
        onClick={getLocation}
        className="bg-blue-600 px-6 py-3 rounded-lg"
      >
        Get My Location
      </button>

      {latitude && longitude && (
        <div className="bg-gray-900 p-4 rounded-lg text-center">
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}