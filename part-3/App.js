const App = () => {
    return (
        <div>
            <Person id='1' name='Vivianna' age='18' hobbies={['swimming', 'skiing', 'knitting']}/>
            <Person id='2' name='HanselMcgeeOsiren' age='42' hobbies={['boxing', 'volleyball', 'smoking']}/>
            <Person id='3' name='Lance' age='9' hobbies={['eating', 'drawing', 'videogames']}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));