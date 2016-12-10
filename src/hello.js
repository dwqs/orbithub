/**
 * Created by pomy on 10/12/2016.
 */


import React, {Component, PropTypes,Children} from 'react';

import './index.less';

export default class Hello extends Component{

    constructor () {
        super();
    }

    render () {
        //return Children.only(this.props.children);
        return (
            <div>Hello, this is te1111st11</div>
        );
    }
}