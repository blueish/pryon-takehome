import {useEffect, useState} from "react"
import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet'

import "./iss-location.css";

const ISS_LOCATION_API = "http://api.open-notify.org/iss-now.json";

export default function ISSLocation() {
    const [iss, setIss] = useState<[number, number]>([0, 0]);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const data: Response = await fetch(ISS_LOCATION_API);

            const { iss_position: { latitude, longitude }} = await data.json();

            console.log(latitude, longitude);

            setIss([latitude, longitude])
        }, 200)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div>
            iss location
            <MapContainer id="map" center={[0, 0]} zoom={1} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={iss}>
                </Marker>
            </MapContainer>
        </div>
    )
}