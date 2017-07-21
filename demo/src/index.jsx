import React from 'react'
import { render } from 'react-dom'

import App from './App'
import './scss/main'

const appTitle = 'Welcome to your React + Nebula project'

render(<App title={appTitle} />, document.querySelector('#app'));
