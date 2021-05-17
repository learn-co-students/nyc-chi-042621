function ToyCard(props){
    console.log(props)
    
    return(
        <li>
            <span>{props.toyName}</span>
            <p>{props.likes} Likes</p>
        </li>
    )
}

export default ToyCard