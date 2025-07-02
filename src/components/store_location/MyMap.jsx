// src/components/store_location/MyMap.jsx
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// ✅ Optional: Use a custom icon (place your PNG in public/ if needed)
const customIcon = new L.Icon({
  iconUrl: "/images/marker-store.png", // put this in /public folder
  iconSize: [30, 30],
  iconAnchor: [15, 40],
  popupAnchor: [0, -35],
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

// ✅ Animate map center on city change
const AnimatedMapCenter = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, 12, {
        animate: true,
        duration: 1.2,
      });
    }
  }, [position, map]);
  return null;
};

const MyMap = ({ storeLocations }) => {
  const defaultPosition = storeLocations?.[0]
    ? [storeLocations[0].lat, storeLocations[0].lng]
    : [30.3753, 69.3451]; // fallback to Pakistan center

  return (
    <div className="relative z-0 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={defaultPosition}
        zoom={storeLocations.length ? 12 : 5}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <AnimatedMapCenter position={defaultPosition} />

        <MarkerClusterGroup>
          {storeLocations.map((store, idx) => (
            <Marker
              key={idx}
              position={[store.lat, store.lng]}
              icon={customIcon}
            >
              <Popup>{store.address}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
};

export default MyMap;
