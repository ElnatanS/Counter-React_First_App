import React, { Component } from 'react';

class Counter extends Component {

	render() {
		return (
      
			<div>
        
				<span className={this.classesBadge()}>{this.formatCounter()}</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-primary">
					Increment
				</button>
				<button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
			</div>
		);
	}

	classesBadge() {
		let classBadge = 'badge m-2 badge-';
		classBadge +=
			this.props.counter.value === 0
				? 'danger'
				: this.props.counter.value === 1
					? 'warning'
					: 'primary';
		return classBadge;
	}

	formatCounter() {
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}
}

export default Counter;
