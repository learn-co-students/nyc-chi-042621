function ToyCardFunc(props){
    
    let funcDef = () => {
        console.log("I'm inside funcDef")
    }
    
    funcDef()
    let favoriteNumber = 12
    console.log("TOYCARDFUNC PROPS",props)

    return (
        <li>
            <span>{props.toyName}</span>
            <p>{props.likes} Likes</p>
        </li>
    )
}   


export default ToyCardFunc