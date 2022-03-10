const CreatorEntry = (props) => {
    return(
        <input onBlur={input => console.log(input.target.value)}/>
    );
}

export default CreatorEntry;