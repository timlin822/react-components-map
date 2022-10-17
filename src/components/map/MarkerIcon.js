import L from 'leaflet';

const MarkerIcon=L.icon({
    iconUrl: require("images/marker.png"),
    iconRetinaUrl: require("images/marker.png"),
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [50,50],
    className: "marker-icon"
});

export default MarkerIcon;