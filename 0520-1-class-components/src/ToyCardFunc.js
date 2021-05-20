function ToyCardFunc(props){
    
    let funcDef = () => {
        console.log("I'm inside funcDef")
    }
    
    // funcDef()
    let favoriteNumber = 12
    console.log("TOYCARDFUNC PROPS",props)

    return (
        <li onClick={() => {props.changeOwner()}}>
            <h2>{props.toyName}</h2>
            <h6>Owned By: {props.owner}</h6>
            <p>{props.likes} Likes</p>

        </li>
    )
}   


export default ToyCardFunc