import { useContext } from "react";
import MyGlobalContext from "../context/my-context";
import TravelEntity from "./TravelEntity";

const TravelList = () => {
    const context = useContext(MyGlobalContext);
    return (
        <div className="travel-list">
            {context.map((entity) => {
                return <TravelEntity 
                            key={entity.key} 
                            entity={entity} 
                        />
            })}
        </div>
    );
}

export default TravelList;