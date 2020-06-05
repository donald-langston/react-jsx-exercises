let ProfilePic = () => {
    return <img src="72975551.jpg" style={{width: "100px", height: "100px" }}/>
}

let CommentBody = (props) => {
    return <div>
                <h3>{props.username}</h3>
                <p>{props.bodytext}</p>
            </div>
    
}

let Comment = () => {
    return <div>
                <ProfilePic />
                <CommentBody username="donald" bodytext="test comment" />
           </div>
}

let Comments = () => {
    return <Comment />
}

ReactDOM.render(<Comments />, document.getElementById('root'))