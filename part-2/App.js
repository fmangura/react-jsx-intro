const App = () => {
    return (
        <div>
            <Tweet username="scootMagoot" name="Scooter Lane" message="This is my tweet!"/>
            <Tweet username="curlyTop" name="Megan C." message="I am Megan!"/>
            <Tweet username="moneyMagic" name="Lucas J." message="Great things!"/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));