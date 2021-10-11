import { LatLngExpression } from "leaflet";
import { Popup, Polyline } from "react-leaflet";

const SiteOutline = ({ positions }: { positions: LatLngExpression[] }) => (
  <Polyline positions={positions}>
    <Popup>you are here</Popup>
  </Polyline>
);

export default SiteOutline;
