import React, { Component } from 'react'
import AssignmentsContainer from './AssignmentsContainer'

import {Link} from 'react-router-dom'

export default class Course extends Component {

    state = {
        show: false
    }

    toggleClick = () => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
        let {name, assignments,id} = this.props.course
        return (
            <div>
                <Link to={`/courses/${id}`}>
                    <h2>{name}</h2>
                </Link>
                <button onClick={this.toggleClick}>
                    {this.state.show ? "Hide" : "Show"} Assignments
                </button>
                {
                    this.state.show
                        ?
                    < AssignmentsContainer assignments={assignments} deleteAssignmentFromState={this.props.deleteAssignmentFromState}/>
                        :
                    null
                }
            </div>
        )
    }
}
