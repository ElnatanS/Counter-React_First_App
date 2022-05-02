import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Counters from './components/counters.jsx'
import Navbar from './components/navbar.jsx'

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 1 },
			{ id: 2, value: 5 },
			{ id: 3, value: 3 },
			{ id: 4, value: 0 }
		]
	};

  handleIncrement = count => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(count);
    counters[index] = {...count}
    counters[index].value += 1;
    this.setState({ counters })
  }

  handleReset = () => {
    const counters = this.state.counters.map(e => {e.value = 0; return e;});
    this.setState({ counters });
  };

	handleDelete = counterId => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
	};

  render(){
  return (
    <React.Fragment>
      <Navbar totalCounter={this.state.counters.filter(c => c.value > 1).length}/>
      <main className="container">
        <Counters 
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          />
      </main>
    </React.Fragment>
  );
                  }
}

export default App;