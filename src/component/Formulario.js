import React, { Component } from 'react';

class Formulario extends Component {
	state = {
		quantity: '',
		term: ''
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

	render() {
		return (
			<form>
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
					<input type="submit" value="Calculate" className="u-full-width button-primary" />
				</div>
			</form>
		);
	}
}

export default Formulario;
