const App = () => {
    return (
        <div>
            <FirstComponent />
            <NamedComponent name="Franz" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));