import React, { Component as Flatiron, Fragment as Love } from 'react'

class BananasRocketsCurlies extends Flatiron {

    state = {
        fears: ["Pandemic!!!", "Right move??", "Time Zone Differences???"],     
    }

    componentDidMount(){
        this.setState({
            fears: ["Code Challenges", "GitHub", "Imposter Syndrome", "Which Workshops?",  "React Routing"]
        })
    }

    componentDidUpdate(){
        // this.setState({
        //    fears: ["Just a few less things"]
        // })
    }

    componentWillUnmount(){
        let roadToSuccess = (() => {
            let success = {
                grit: true,
                togetherness: "FACTS"
            }
        })()
        this.setState({
            fears: ["Transition"]
        })
    }

    render() {
        return (
            <Love>
                <div>Community</div>
            </Love>
        )
    }
}


export default BananasRocketsCurlies