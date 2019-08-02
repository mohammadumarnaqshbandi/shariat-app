import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './containers/app/App'
import Bayans from './store/bayans'

ReactDOM.render(
    
        <App store={Bayans} />
    , 
    document.getElementById('root'))