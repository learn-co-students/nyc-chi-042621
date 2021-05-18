function ToyCard(props){
    console.log(props)

    // if(props.sayHelloWhenInvoked){
    //     props.sayHelloWhenInvoked()
    // }

    return (
        <li>
            <span>{props.toyName}</span>
            <p>{props.likes} Likes</p>
        </li>
    )
}   


export default ToyCard