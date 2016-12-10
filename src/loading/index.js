/**
 * Created by pomy on 10/12/2016.
 */

'use strict';
import './index.less';

import React, {Component,PropTypes} from 'react';


export default class Loading extends Component {
    constructor () {
        super();
    }

    static propTypes = {
        shown: PropTypes.bool.isRequired
    };

    static defaultProps = {
        shown: false
    };

    render(){
        return (
            <div className="loading" style={{display: this.props.shown ? 'flex':'none'}}>
                <div className="spin"></div>
                <span>Searching...</span>
            </div>
        )
    }
}