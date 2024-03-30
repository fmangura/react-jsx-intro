const Tweet = (props) => {
    return (
        <div className='tweet-card'>
            <h3>@{props.username}</h3>
            <p>{props.name}: {props.message}</p>
        </div>
    )
}
