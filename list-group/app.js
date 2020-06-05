let ListGroupItem = (props) => {
return <li className = "list-group-item">{props.item}</li>
}

let ListGroup = () => {
    return <div>
        <ul className = "list-group">
            <ListGroupItem item="Cras justo odio" />
            <ListGroupItem item="Dapibus ac facilisis in" />
            <ListGroupItem item="Morbi leo risus" />
            <ListGroupItem item="Porta ac consectetur ac" />
            <ListGroupItem item="Vestibulum at eros" />
        </ul>
    </div>
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))