import React from 'react';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log('props',props)
  const { name, updatedName } = props
  return (
    <div className="App">
      <h1>This is app component</h1>
      <h1>My name is {name}</h1>
      <button onClick={()=>updatedName('Ahmed')}>Update</button>
    </div>
  );
}

const mapStateToPorps = (state) => {
  console.log(state)
  const { name } = state
  return {
    name
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    updatedName: (name) => {dispatch({type: 'UpdatedName', payload: name})}
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(App);
