import React, { Component } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import './App.css'

export class App extends Component {
  render() {
    return (
      <div className = 'app'>
        <div className = 'app_body'>
          <Sidebar />
          <Chat />
        </div>
      </div>
    )
  }
}

export default App




