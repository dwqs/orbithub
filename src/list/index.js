/**
 * Created by pomy on 10/12/2016.
 */

'use strict';
import './index.less';

import React, {Component,PropTypes,Children} from 'react';

const NEXT_PAGE_PREFIX = 'https://github.com/search?p=2&q=';

export default class List extends Component{
    constructor(){
        super();
    }

    static propTypes = {
        items: PropTypes.array,
        shown: PropTypes.bool.isRequired,
        val: PropTypes.string
    };

    static defaultProps = {
        items: []
    };

    jumpToUrl(url){
        return () => {
            //send a message for creating a new tab
            chrome.runtime.sendMessage(url, (res) => {});
        }
    }

    goToNext(){
        let nextPage = NEXT_PAGE_PREFIX + this.props.val;
        chrome.runtime.sendMessage(nextPage, (res) => {});
    }

    renderList(){
        let {items} = this.props;

        let lists = items.map((item,index) => {
            return (
                <li className="item" key={index}>
                    <div className="title">
                        <h3 onClick={this.jumpToUrl(item.html_url)}>
                            {item.full_name}
                        </h3>
                    </div>
                    <p className="desc">{item.description}</p>
                    <div className="meta">
                        <span className="language" style={{display:item.language ? 'inline-block':'none'}}>
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
        let {shown} = this.props;

        return (
            <ul className="list" style={{display: shown ? 'block':'none'}}>
                {this.renderList()}
                <p className="next">
                    没有找到？去<span onClick={this.goToNext.bind(this)}>下一页</span>
                </p>
            </ul>
        )
    }
}
