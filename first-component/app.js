let FirstComponent = () => {
    return <div>
        <div id="firstRow">
            <div className="redBox"></div>
            <div className="greenBox"></div>
        </div>

        <div id="secondRow">
            <div className="blueBox"></div>
            <div className="yellowBox"></div>
        </div>
    </div>
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))

