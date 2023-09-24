import { useEffect, useState } from "react";
import "./astronauts.css";

const PEOPLE_IN_SPACE_API = "http://api.open-notify.org/astros.json"

interface AstronautData {
    name: string;
    craft: string;
}

export default function Astronauts() {
    // I'm unsure if numAstronauts ever doesn't equal the len(astronauts)
    // but since maybe the api doesnt return some secret astronauts or something
    // we can just display them independently instead of together
    const [numAstronauts, setNumAstronauts] = useState<number>(0);
    const [astronauts, setAstronauts] = useState<AstronautData[]>([]);

    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            const data: Response = await fetch(PEOPLE_IN_SPACE_API);

            const { message, number, people } = await data.json();

            setAstronauts(people);
            setNumAstronauts(number)
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div className="astronaut-page">
            {loading ?
                "Loading..." :
                <>
                    <h2>There are {numAstronauts} astronauts in space right now!</h2>
                    <div className="astro-wrapper">
                        <div className="astro-row">
                            <div className="astro-name">Astronaut Name</div>
                            <div className="astro-craft">Craft</div>
                        </div>
                        {astronauts.map((astronaut: AstronautData) =>
                            <div key={astronaut.name} className="astro-row">
                                <div className="astro-name">{astronaut.name}</div>
                                <div className="astro-craft">{astronaut.craft}</div>
                            </div>
                        )}
                    </div>
                </>
            }
        </div>
    )
}