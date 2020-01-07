import React from 'react';
import PropTypes from 'prop-types'
import {
    addNameCreater
} from './redux/actions';
import { connect } from 'react-redux';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.dispatch(addNameCreater(12));
    }

    nameChange = (e) => {
        this.props.addNameCreater(e.target.value)
    }

    send = () => {
        axios.post('https://it-h5-open-api-admin.suuyuu.cn/api/Ctrip/SendSms', {
            "mobile": '13036163226',
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        const { lastname } = this.props;
        return (
            <div>
                <input type="text" onChange={this.nameChange} />
                <span>name:{lastname}</span>
                <button onClick={this.send}>按钮</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        ...state
    }
}

export default connect(mapStateToProps)(App);