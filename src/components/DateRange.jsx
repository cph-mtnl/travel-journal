const DateRange = ({start, end}) => {

    const formatDate = (myDate) => {
        const date = new Date(myDate);
        const day = date.getDate();
        const month = date.toLocaleString(
                'default', { month: 'long' }
            ).substring(0, 3);
        const year = date.getFullYear();
        return `${day} ${month}, ${year}`;
    }

    return (
        <div className="date-range">
            <p>{formatDate(start)} - {formatDate(end)} </p>
        </div>
    );
}

export default DateRange;