import React, {Component} from 'react';
import './style.css'
import './style.less'

import image from './images/cat.png'


export default class Page1 extends Component {
    render() {
        return (
            <div className="pagebox">
                this is Page1~
                <img src={image}/>
                <h2 className="fuck">测试less</h2>
            </div>

        )
    }
}
