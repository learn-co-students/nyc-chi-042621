import React from 'react'

class ToyCardClass extends React.Component{

    funcDef = () => {
        console.log("Hello, I'm inside the funcDef Class")
    }

    render(){
        let thisIsValidWay = true
        return (
            <li>
                <h2>{this.props.toyName}</h2>
            </li>
        )
    }


}




export default ToyCardClass