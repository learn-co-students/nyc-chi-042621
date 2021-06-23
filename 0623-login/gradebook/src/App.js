import React, { Component } from 'react'
import LoginForm from './components/LoginForm'
import CoursesContainer from './components/CoursesContainer'
import Course from './components/Course'

import './App.css';
import {Switch, Route, withRouter, Link} from 'react-router-dom'



class App extends Component {

  state = {
    id: 0,
    username: "",
    courses: [],
  }

  setUser = (user) => {

    this.setState({
      id: user.id,
      username: user.username,
      courses: user.courses
    })
    // CHANGE THE URL
    this.props.history.push("/courses")

  }

  deleteAssignmentFromState = (assignment) => {
    let theCourseThatContainsTheAssignment = this.state.courses.find(course => {
      return course.id === assignment.course_id
    })

    // REPLACE THIS WITH A FILTER, MAP WITH A CONDITION, SPREAD OPERATOR FOR CRUD ON ASSIGNMENTS
    let newArrayOfAssignments = theCourseThatContainsTheAssignment.assignments.filter(assignmentObj =>{
      return assignmentObj.id !== assignment.id
    })
    // 

    let copyOfCourse = {
      ...theCourseThatContainsTheAssignment,
      assignments: newArrayOfAssignments
    }

    let theCopyOfAllCourses = this.state.courses.map(course => {
      if(course.id === copyOfCourse.id){
        return copyOfCourse
      } else {
        return course
      }
    })

    this.setState({
      courses: theCopyOfAllCourses
    })

  }


  decideWhichCourseToRender = (routerProps) => {
    // The return value of this callback is what is to be rendered
    let whatUserTypedInURL = routerProps.match.params.id
    let foundCourse = this.state.courses.find(course => {
      return course.id === parseInt(whatUserTypedInURL)
    })

    if(foundCourse){
      return <Course course={foundCourse} deleteAssignmentFromState={this.deleteAssignmentFromState}/>
    } else {
      return <p>404 No course Found</p>
    }
   
  }

  render() {
    return (
      <div className="App">
        <h1>Gradebook</h1>
        <Link to="/login">Login</Link>
        <Link to="/courses">Courses</Link>

        <Switch>
          <Route exact path="/login">
            < LoginForm setUser={this.setUser}/>
          </Route>
          <Route exact path="/courses">
            < CoursesContainer courses={this.state.courses} deleteAssignmentFromState={this.deleteAssignmentFromState}/>
          </Route>

          <Route exact path="/courses/:id" render={this.decideWhichCourseToRender}/>
            
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
