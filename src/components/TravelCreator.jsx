import React, {useContext} from "react";
import MyContext from "../context";

const TravelCreator = () => {
    const context = useContext(MyContext);
    console.log("context", context);
    return (
        <div>
            
        </div>
    );
}

export default TravelCreator;