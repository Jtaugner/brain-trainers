import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from "./store";
import {MemoryRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <MemoryRouter
            initialEntries={['/home']}
            initialIndex={0}
        >
            <App
            />
        </MemoryRouter>
    </Provider>

    ,
    document.getElementById('root')
);
