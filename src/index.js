/**
 * Created by pomy on 10/12/2016.
 */

'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Orbithub from './orbithub';

window.onload = function () {
    ReactDOM.render(
        <Orbithub />,
        document.getElementById('orbithub')
    );
};
