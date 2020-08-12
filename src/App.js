import React from 'react';
import './App.css';
import { connect } from 'react-redux';

//action
import { handleName } from './action'

function App(props) {
  console.log('props',props)
  const { name, updatedName } = props
  return (
    <div className="App">
      <h1>This is app component</h1>
      <h1>My name is {name}</h1>
      <button onClick={()=>updatedName()}>Update</button>
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
    updatedName: () => {dispatch(handleName())}
  }
}

export default connect(mapStateToPorps, mapDispatchToProps)(App);
