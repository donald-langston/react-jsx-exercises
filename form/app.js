let TextInput = () => {
    return <input type="text" />
}

let YesNoRadio = () => {
    return <div>
        <label>Yes:<input type="radio" /></label>
        <label>No:<input type="radio" /></label>
    </div>
}

let SubmitButton = () => {
    return <button type="submit">Submit</button>
}

let Form = () => {
    return <form style={{display: "flex", flexDirection: "column"}}>
            <TextInput />
            <TextInput />
            <TextInput />
            <YesNoRadio />
            <SubmitButton />
        </form>
}


ReactDOM.render(<Form />, document.getElementById('root'))