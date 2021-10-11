import { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import SiteOutline from "../siteOutline/SiteOutline";

const Map = () => {
  const defaultPosition: LatLngExpression = [45.75773, 4.83178];
  const positions: LatLngExpression[] = [
    [45.75773, 4.83178],
    [45.75873, 4.83178],
    [45.75873, 4.83078],
    [45.75773, 4.83078],
    [45.75773, 4.83178],
  ];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: "50vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SiteOutline positions={positions} />
    </MapContainer>
  );
};

export default Map;
