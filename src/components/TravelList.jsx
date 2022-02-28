import TravelEntity from "./TravelEntity";

const TravelList = ({data}) => {
    return (
        <div className="travel-list">
            {data.map((entity) => {
                return <TravelEntity 
                            key={entity.key} 
                            entity={entity} 
                        />
            })}
        </div>
    );
}

export default TravelList;