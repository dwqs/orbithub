/**
 * Created by pomy on 10/12/2016.
 */

'use strict';
import './index.less';

import React, {Component, PropTypes,Children} from 'react';
import ReactDom from 'react-dom';

const API_PREFIX = 'https://api.github.com/search/repositories?q=';

import Loading from '../loading/index';

export default class Orbithub extends Component{

    constructor () {
        super();
        this.state = {
            val: '',
            items:[],
            showLoading: false,
            showList: false,
            showTips: false,
            tipsInfo: "Search repositories on Github"
        }
    }

    valChange(e){
        this.setState({
            val: e.target.value
        })
    }

    render () {
        //return Children.only(this.props.children);
        return (
            <div className="container" ref={(root) => this.root = root}>
                <header>
                    <img src='../images/github48.png' alt="logo"/>
                    <input type="text" autoFocus="autoFocus" placeholder="Search On Github" onInput={this.valChange.bind(this)} />
                </header>
                <main>
                    <Loading shown={this.state.showLoading} />
                </main>
            </div>
        );
    }

    enterToSearch(e){
        if(e.keyCode === 13){
            let url = API_PREFIX + this.state.val;
            this.setState({
                showLoading: true
            });
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                console.log('77777',data);
                if(data.total_count){
                    this.setState({
                        showLoading: false,
                        showList: true,
                        items: data.items
                    });
                } else {
                    this.setState({
                        showLoading: false,
                        showTips: true,
                        tipsInfo: "Couldn’t find any repositories matching " + this.state.val
                    });
                }
            }).catch((err) => {
                this.setState({
                    showLoading: false,
                    showTips: true,
                    tipsInfo: "Something was error when searching, try again."
                });
            });
        }
    }

    componentDidMount(){
        let rootDom = ReactDom.findDOMNode(this.root);
        rootDom.addEventListener('keydown',this.enterToSearch.bind(this),false);
    }

    componentWillUnmount(){
        let rootDom = ReactDom.findDOMNode(this.root);
        rootDom.removeEndEventListener('keydown',this.enterToSearch);
        this.root = null;
    }
}