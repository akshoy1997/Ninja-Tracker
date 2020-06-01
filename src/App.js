import React, { Component } from 'react';
import Ninjas from './Ninjas';
import './App.css';
import AddNinja from './AddNinja';

class App extends Component {
  state = {
    ninjas : [
      { name: "Akshay", age: 22, belt: "black", id: 1 },
      { name: "Sarthak", age: 21, belt: "green", id: 2 },
      { name: "Kaju", age: 21, belt: "Old black", id: 3 },
      { name: "Dummy", age: 19, belt: "red", id: 4 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = this.state.ninjas.length + 1;
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    })
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas
    })
  }
  componentDidMount(){
    console.log("Component Mounted");
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Components Updated");
    console.log(prevState);
    console.log(prevProps);
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome to my app.</p>
        <h2>Learn about me and my ninja friends here!</h2>
        {this.state.ninjas.map((ninja) => {
          return (
            <Ninjas deleteNinja={this.deleteNinja} id={ninja.id} key={ninja.id} name={ninja.name} age={ninja.age} belt={ninja.belt} />
          )
        })}
        <h2>Add more ninjas here</h2>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
