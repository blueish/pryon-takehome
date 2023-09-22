import { useEffect, useState } from "react";

const PEOPLE_IN_SPACE_API = "http://api.open-notify.org/astros.json"

interface AstronautData {
    name: string;
    craft: string;
}

export default function Astronauts() {
    // I'm unsure if numAstronauts ever doesn't equal the len(astronauts)
    // but since maybe the api doesnt return some secret astronauts or something
    // we can just display them independently instead of together
    const [numAstronauts, setNumAstronauts] = useState(0);
    const [astronauts, setAstronauts] = useState<AstronautData[]>([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const data: Response = await fetch(PEOPLE_IN_SPACE_API);

            console.log(data)

            const { message, number, people } = await data.json();

            console.log(number, people)

            if (message != "success") {
                // todo: set error states on the component
                console.error("api down") 
            }

            setAstronauts(people);
            setNumAstronauts(number)
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <div>
            astronauts page

            {loading && "loading..."}
            {!loading && <p>There are {numAstronauts} astronauts in space right now</p>}
            {astronauts.map((astronaut: AstronautData) => 
            <>
            <div>{astronaut.name}</div>
            <div>{astronaut.craft}</div>
            </>

            )}
        </div>
    )
}