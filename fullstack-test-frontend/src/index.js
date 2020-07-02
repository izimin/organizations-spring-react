import ReactDOM from 'react-dom';
import React from 'react';
import RetargetEvents from 'react-shadow-dom-retarget-events';
import Jss from 'jss';
import JssPreset from 'jss-preset-default';
import {JssProvider} from 'react-jss';
import {Provider} from 'react-redux';
import App from './app.jsx';
import Store from './store';
import './index.scss';
import {BrowserRouter} from 'react-router-dom';

class FullstackTestFrontend extends HTMLElement {

    constructor() {
        super();
        this.store = Store();
        this.reduxListener = null;
        this.root = this.attachShadow({mode: 'closed'});
        this.applicationRoot = document.createElement('div');
        this.root.appendChild(this.applicationRoot);
        this.reflect = this.reflect.bind(this);
    }

    static get observedAttributes() {
        return [];
    }

    connectedCallback() {
        this.reduxListener = this.store.subscribe(this.reflect);

        Jss.setup({
            insertionPoint: this.applicationRoot,
            ...JssPreset(),
        });

        ReactDOM.render((
            <JssProvider jss={Jss}>
                <Provider store={this.store}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>
            </JssProvider>
        ), this.applicationRoot);

        RetargetEvents(this.root);
    }

    disconnectedCallback() {

    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (newVal !== oldVal) {
            //
        }
    }

    reflect() {

    }

}

window.customElements.define('fullstack-test-frontend', FullstackTestFrontend);
