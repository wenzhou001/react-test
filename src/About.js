import React from 'react';
import imgsrc from './images/icon.png';

class About extends React.Component {
    render(){
        return(
            <div>About
                <img src={imgsrc}/>
            </div>
        )
    }
}

export default About;