function TextDisplay(props){

    return(
        <span>
            <h1>Text Should Appear: </h1>
            <p>{props.whatUserTyped}</p>
        </span>
    )
}

export default TextDisplay