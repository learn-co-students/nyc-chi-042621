import React, { Component } from 'react'

export default class Assignment extends Component {

    handleDelete = () => {
        fetch(`http://localhost:9393/assignments/${this.props.assignment.id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then((deletedAssignment) => {
                this.props.deleteAssignmentFromState(this.props.assignment)
            })
    }

    render() {
        let {name} = this.props.assignment
        return (
            <div>
                <span>Assignment Name: {name}</span>
                <button onClick={this.handleDelete}>
                    Delete
                </button>
            </div>
        )
    }
}
