import EntityLocation from "./EntityLocation";
import DateRange from "./DateRange";

const TravelEntity = ({entity}) => {
    return (
        <div>
            <div className="entity">
                <img src={entity.image} />
                <div className="entity--info">
                    <EntityLocation
                        country={entity.country} 
                        url={entity.googleMapsUrl}
                    />
                    <h1>{entity.site}</h1>
                    <DateRange
                        start={entity.startDate}
                        end={entity.endDate} 
                    />
                    <p>{entity.description}</p>
                </div>
            </div>
            <hr/>
        </div>
    );
}

export default TravelEntity;