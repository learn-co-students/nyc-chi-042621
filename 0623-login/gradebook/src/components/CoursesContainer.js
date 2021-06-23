import React from 'react'
import Course from './Course'

export default function CoursesContainer(props) {

    let arrayOfCourses = props.courses.map(course => {
        return <Course key={course.id} course={course} deleteAssignmentFromState={props.deleteAssignmentFromState} />
    })

    return (
        <div>
            <h1>Courses Container</h1>
            {arrayOfCourses}
        </div>
    )
}
