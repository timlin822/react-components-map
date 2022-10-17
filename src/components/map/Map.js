import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import MarkerIcon from 'components/map/MarkerIcon';

import STADIUMS_DATA from 'data/StadiumsData';

import './Map.css';

const Map=()=>{
    return (
        <>
            <h2 className="title">MLB場館</h2>
            <MapContainer center={[36,-100]} zoom={4} className="map">
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {STADIUMS_DATA.map(stadium=>(
                    <Marker key={stadium.id} position={[stadium.geometry.latitude,stadium.geometry.longitude]} icon={MarkerIcon}>
                        <Popup>
                            球隊: {stadium.name}<br />
                            場館: {stadium.place}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </>
    );
}

export default Map;