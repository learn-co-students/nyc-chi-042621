import React from 'react'

class ToyCardClass extends React.Component{

    funcDef = () => {
        console.log("Hello, I'm inside the funcDef Class")
    }

    render(){
        // console.log("TOYCARDCLASS",this.props)
        // this.funcDef()
        // JSX returned here is what will show up on the DOM
        // `render` is essentially your functional component
            // bodies of the render function and a functional component can be the same

        let thisIsValidWay = true
        
        // let anotherFuncDef = () => {
        // }
        // anotherFuncDef()

        return (
            <li>
                <h2>{this.props.toyName}</h2>
            </li>
        )
    }


}




export default ToyCardClass