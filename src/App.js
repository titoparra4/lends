import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './component/Formulario';
import { calculateTotal } from './helpers';

class App extends Component {
	loanData = (quantity, term) => {
		calculateTotal();
	};

	render() {
		return (
			<Fragment>
				<h1>Loan quote</h1>
				<div className="container">
					<Formulario loanData={this.loanData} />
				</div>
			</Fragment>
		);
	}
}

export default App;
