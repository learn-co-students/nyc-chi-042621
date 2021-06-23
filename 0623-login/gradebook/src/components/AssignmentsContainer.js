import React from 'react'
import Assignment from './Assignment'

export default function AssignmentsContainer(props) {

    let arrOfAssignments = props.assignments.map(assignment => {
        return <Assignment key={assignment.id} assignment={assignment} deleteAssignmentFromState={props.deleteAssignmentFromState} />
    })

    return (
        <div>
            {arrOfAssignments}
        </div>
    )
}
