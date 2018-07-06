import React, { Component } from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Post from './components/Post'
import Postform from './components/Postform';
import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <Postform />
          <hr />
          <Post />
        </div>
      </Provider>
    );
  }
}

export default App;
