/**
 * Created by pomy on 10/12/2016.
 */

'use strict';
import './index.less';

import React, {Component,PropTypes,Children} from 'react';

export default class List extends Component{
    constructor(){
        super();
    }

    static propTypes = {
        items: PropTypes.array,
        shown: PropTypes.bool.isRequired
    };

    static defaultProps = {
        items: []
    };

    renderList(){
        let {items} = this.props;

        let lists = items.map((item,index) => {
            return (
                <li className="item" key={index}>
                    <div className="title">
                        <h3>
                            <a href={item.html_url}>{item.full_name}</a>
                        </h3>
                    </div>
                    <p className="desc">{item.description}</p>
                    <div className="meta">
                        <span className="language">
                            <img src="../../images/language.png" alt="language"/>
                            <span className="text">{item.language}</span>
                        </span>
                        <span className="star">
                            <img src="../../images/star.png" alt="language"/>
                            <span className="text">{item.stargazers_count}</span>
                        </span>
                        <span className="fork">
                            <img src="../../images/fork.png" alt="language"/>
                            <span className="text">{item.forks_count}</span>
                        </span>
                    </div>
                </li>
            )
        });

        return lists;
    }

    render() {
        let {shown,items} = this.props;
        console.log('6666666',items.length);
        return (
            <ul className="list" style={{display: shown ? 'block':'none'}}>
                {this.renderList()}
            </ul>
        )
    }
}

{/*<li className="item">*/}
    {/*<div className="title">*/}
        {/*<h3>*/}
            {/*<a href="https://github.com/facebook/react">facebook/react</a>*/}
        {/*</h3>*/}
    {/*</div>*/}
    {/*<p className="desc">sdasdsdasdassdasdsdasdassdasdasassdasdassdasdasas</p>*/}
    {/*<div className="meta">*/}
                        {/*<span className="language">*/}
                            {/*<img src="../../images/language.png" alt="language"/>*/}
                            {/*<span className="text">JavaScript</span>*/}
                        {/*</span>*/}
        {/*<span className="star">*/}
                            {/*<img src="../../images/star.png" alt="language"/>*/}
                            {/*<span className="text">27363</span>*/}
                        {/*</span>*/}
        {/*<span className="fork">*/}
                            {/*<img src="../../images/fork.png" alt="language"/>*/}
                            {/*<span className="text">67657</span>*/}
                        {/*</span>*/}
    {/*</div>*/}
{/*</li>*/}
