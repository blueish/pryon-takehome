import {useEffect, useState} from "react"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { issIcon } from "../common/iss-icon";

import "./iss-location.css";

const ISS_LOCATION_API = "http://api.open-notify.org/iss-now.json";

export default function ISSLocation() {
    const [iss, setIss] = useState<[number, number]>([0, 0]);
    const [loaded, setLoaded] = useState<boolean>(false);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const data: Response = await fetch(ISS_LOCATION_API);

            const { iss_position: { latitude, longitude }} = await data.json();

            setIss([latitude, longitude]);
            if (!loaded) {
                setLoaded(true);
            }
        }, 200)

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    return (
        <div className="location-container">
            <p>The ISS flies over the earth constantly, making an orbit every 93 minutes. Below is its current location above us!</p>
            {!loaded ? "Loading..." : 
                <MapContainer id="map" center={[0, 0]} zoom={2} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker data-testid="iss" position={iss} icon={issIcon}>
                        <Popup>
                            <p>Latitude: {iss[0]}</p>
                            <p>Longitude: {iss[1]}</p>
                        </Popup>
                    </Marker>
                </MapContainer>
            }
        </div>
    )
}