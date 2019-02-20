import React, { Component } from 'react';

class Formulario extends Component {
	state = {
		quantity: '',
		term: ''
	};

	calculatePay = (e) => {
		e.prevenDefault();

		//Aply destructuring
		const { quantity, term } = this.state;

		this.props.loanData(quantity, term);
	};

	updateState = (e) => {
		//read the form data
		console.log(e.target.value);

		const { name, value } = e.target;

		//Update the state
		this.setState({
			[name]: Number(value)
		});
	};

	enableSubmit = () => {
		//apply destructuring
		const { quantity, term } = this.state;
		//read the variables
		const noValid = !quantity || !term;
		//return an answer
		return noValid;
	};

	render() {
		return (
			<form onSubmit={this.calculatePay}>
				<div>
					<label>Loan amount</label>
					<input
						onChange={this.updateState}
						type="number"
						name="quantity"
						className="u-full-width"
						placeholder="Example: 3000"
					/>
				</div>
				<div>
					<label>term to pay:</label>
					<select onChange={this.updateState} name="term" className="u-full-width">
						<option value="">Select</option>
						<option value="3">3 Months</option>
						<option value="6">6 Months</option>
						<option value="12">12 Months</option>
						<option value="24">24 Months</option>
					</select>
				</div>
				<div>
					<input
						disabled={this.enableSubmit()}
						type="submit"
						value="Calculate"
						className="u-full-width button-primary"
					/>
				</div>
			</form>
		);
	}
}

export default Formulario;
