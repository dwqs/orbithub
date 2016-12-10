/**
 * Created by pomy on 10/12/2016.
 */

'use strict';
import './index.less';

import React, {Component,PropTypes,Children} from 'react';

export default class Tips extends Component{
    constructor(){
        super();
    }

    static propTypes = {
        tipsInfo: PropTypes.string,
        shown: PropTypes.bool.isRequired
    };

    static defaultProps = {
        tipsInfo: 'Search repositories on Github'
    };

    render() {
        let {shown, tipsInfo} = this.props;

        return (
            <div className="tips" style={{display: shown ? 'flex':'none'}}>
                <div className="info">
                    <img src="../images/search.png" alt="search"/>
                    <p>{tipsInfo}</p>
                </div>
            </div>
        )
    }
}
