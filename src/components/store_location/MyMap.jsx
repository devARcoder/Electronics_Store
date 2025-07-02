// components/store_location/MyMap.jsx
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MyMap = ({ storeLocations }) => {
  // Fallback center if no location is selected
  const defaultPosition = storeLocations?.[0]
    ? [storeLocations[0].lat, storeLocations[0].lng]
    : [30.3753, 69.3451]; // Pakistan center

  return (
    <div className="relative z-0 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={defaultPosition}
        zoom={storeLocations?.length ? 12 : 5}
        className="h-full w-full"
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {storeLocations?.map((store, index) => (
          <Marker key={index} position={[store.lat, store.lng]}>
            <Popup>{store.address}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MyMap;
