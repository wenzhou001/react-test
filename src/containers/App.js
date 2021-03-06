import React from 'react'
import {connect} from 'react-redux'
import {addNameCreater,addAgeCreater,addNameAsync} from '../redux/actions'
import App from '../App';

export default connect(
    state => ({
        lastname:state.addName,
        lastage:state.addAge
    }),
    {addNameCreater,addAgeCreater,addNameAsync}
)(App)