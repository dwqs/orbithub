/**
 * Created by pomy on 10/12/2016.
 */

'use strict';
import './index.less';

import React, {Component} from 'react';
import ReactDom from 'react-dom';

const API_PREFIX = 'https://api.github.com/search/repositories?q=';

import Loading from '../loading/index';
import Tips from '../tips/index';
import List from '../list/index';

export default class Orbithub extends Component{

    constructor () {
        super();
        this.state = {
            val: '',
            items:[],
            showLoading: false,
            showList: true,
            showTips: false,
            tipsInfo: "Search repositories on Github"
        }
    }

    valChange(e){
        if(e.target.value){
            this.setState({
                val: e.target.value
            })
        } else {
            this.setState({
                val: '',
                showTips: true,
                tipsInfo: "Search repositories on Github",
                items:[],
                showLoading: false,
                showList: false,
            })
        }
    }

    enterToSearch(e){
        if(e.keyCode === 13){
            let url = API_PREFIX + this.state.val;
            this.setState({
                showLoading: true,
                showList: false,
                showTips: false,
            });
            fetch(url).then((res) => {
                return res.json();
            }).then((data) => {
                if(data.total_count){
                    this.setState({
                        showLoading: false,
                        showList: true,
                        showTips: false,
                        items: data.items.slice(0,10)
                    });
                } else {
                    this.setState({
                        showLoading: false,
                        showList: false,
                        showTips: true,
                        tipsInfo: 'Couldn’t find any repositories matching "' + this.state.val + '"'
                    });
                }
            }).catch((err) => {
                this.setState({
                    showLoading: false,
                    showTips: true,
                    showList: false,
                    tipsInfo: "Something was error when searching, try again."
                });
            });
        }
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
                    <Tips shown={this.state.showTips} tipsInfo={this.state.tipsInfo} />
                    <List shown={this.state.showList} items={this.state.items} val={this.state.val} />
                </main>
            </div>
        );
    }

    componentDidMount(){
        let rootDom = ReactDom.findDOMNode(this.root);
        rootDom.addEventListener('keydown',this.enterToSearch.bind(this),false);

        if(!this.state.items.length){
            this.setState({
                showTips: true,
                showList: false,
                showLoading: false
            })
        }
    }

    componentWillUnmount(){
        let rootDom = ReactDom.findDOMNode(this.root);
        rootDom.removeEndEventListener('keydown',this.enterToSearch);
        this.root = null;
    }
}