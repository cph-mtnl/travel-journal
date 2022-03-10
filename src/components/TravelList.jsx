import { useContext } from "react";
import TravelEntity from "./TravelEntity";
import MyContext from "../context";

const TravelList = () => {
    const context = useContext(MyContext);
    console.log(context);
    return (
        <div className="travel-list">
            {context.destinations.map((entity) => {
                return <TravelEntity 
                            key={entity.key} 
                            entity={entity} 
                        />
            })}
        </div>
    );
}

export default TravelList;