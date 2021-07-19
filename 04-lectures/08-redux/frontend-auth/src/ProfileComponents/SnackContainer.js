import React from 'react'
import Snack from './Snack'

import {connect} from 'react-redux'

function SnackContainer(props) {
    let arrOfSnacks = props.snacks.map(snack => <Snack key={snack.id} snack={snack}/>)
    return (
        <ol>
            {arrOfSnacks}
        </ol>
    )
}



// connect is a function that returns a function definition
    // connect also takes in a function definition (callbacks)

// Return value of MSTP is a POJO that'll be merged into props
let mapStateToProps = (globalState) => {

    return {
        snacks: globalState.snackInfo.snacks,
        id: globalState.userInfo.id
    }

}

export default connect(mapStateToProps)(SnackContainer)