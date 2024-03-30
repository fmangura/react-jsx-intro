const Person = (props) => {

    let fullName;
    if (props.name.length > 8) {
        fullName = props.name.slice(0,6)
    } else {
        fullName = props.name
    }

    return (
        <div className="Person-card" id={props.id}>
            <br></br>
            <p>Learn some information about this person</p>
            <p>{fullName}, {props.age}</p>
            <h3>{props.age >= 18 ? "Please go vote!" : "you must be 18"}</h3>

            <h3>Hobbies:</h3>
            <ul>
                {props.hobbies.map(hobbies => <li>{hobbies}</li>)}
            </ul>
        </div>
    )
}