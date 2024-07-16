import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Custom marker icon
const icon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.4/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const StoryMap = ({ locations }) => {
  return (
    <MapContainer center={[20, 0]} zoom={2} className="h-96 w-full rounded-lg">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={icon}>
          <Popup>
            <h3 className="font-bold">{location.title}</h3>
            <p>{location.description}</p>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default StoryMap;
