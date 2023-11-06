"use client";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import iconHamburger from "../../../../public/assets/icons/Combined Shape.svg";

export default function OfficeLocation() {
  const markers = [
    {
      geocode: [32.195189, -95.852155],
      popUp: "first office",
    },
    {
      geocode: [35.432421, -83.150185],
      popUp: "first office",
    },
  ];

  const customIcon = new Icon({
    iconUrl: iconHamburger.src,
    iconSize: [40, 48],
  });

  return (
    <div className="w-full h-[367px] mb-[73px] md:h-[572px] md:w-[560px] md:mb-[199px] lg:w-[1110px] lg:h-[560px]">
      <MapContainer
        center={[34.756846, -90.068075]}
        zoom={5}
        scrollWheelZoom={false}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker, index) => {
          const [lat, lng] = marker.geocode;
          return (
            <Marker
              key={index}
              position={[lat, lng]}
              icon={customIcon}
            ></Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
