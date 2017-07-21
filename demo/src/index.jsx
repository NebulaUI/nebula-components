import React from 'react'
import { render } from 'react-dom'

import App from './App'
import './scss/main.scss'

const appTitle = 'Welcome to your React + Nebula project!!!!dsfsfdf';

render(<App title={appTitle} />, document.querySelector('#app'));
