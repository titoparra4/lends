import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './component/Formulario';

class App extends Component {
	render() {
		return (
			<Fragment>
				<h1>Loan quote</h1>
				<div className="container">
					<Formulario />
				</div>
			</Fragment>
		);
	}
}

export default App;
