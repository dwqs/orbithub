/**
 * Created by pomy on 10/12/2016.
 */

'use strict';

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Hello from './hello';

window.onload = function () {
    ReactDOM.render(
        <Hello />,
        document.getElementById('orbithub')
    );
};
