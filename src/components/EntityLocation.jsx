const EntityLocation = ({country, url}) => {
    return (
        <div className="entity--location">
            <i className="fa-solid fa-location-dot red"></i>
            <span className="spacer">{country}</span>
            <a className="spacer" href={url} target="_blank">
                View on Google Maps
            </a>
        </div>
    );
}

export default EntityLocation;