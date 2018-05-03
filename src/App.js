import React, { Component } from 'react';
import List from './container/List/List';
import './App.css';
import AddList from './container/AddList/AddList';

class App extends Component {
  render() {
    return (
      <div >
        <p style={{textAlign:'center',fontSize:'28px',color:'blue',fontFamily:'cursive'}}>Trello</p>
        <p style={{textAlign:'left',color:'black',fontSize:'15px',marginLeft:'10px'}}>Kubric UI</p>
        <div >
          <div className="SingleLine">
            <AddList />                                      {/* To Render a List */}
          </div>
          <div style={{marginLeft:'10px'}} className="SingleLine">
            <List />                                         {/* To Take input for List*/}
          
          </div>
        </div>

      
      </div>
    );
  }
}

export default App;
