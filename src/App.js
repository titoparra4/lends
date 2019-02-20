import React, { Component, Fragment } from 'react';

import './normalize.css';
import './skeleton.css';

import Formulario from './component/Formulario';
import { calculateTotal } from './helpers';
import Result from './component/Result';
import Message from './component/Message';
import Spinner from './component/Spinner';

class App extends Component {
	state = {
		total: '',
		quantity: '',
		term: '',
		loading: false
	};

	loanData = (quantity, term) => {
		const total = calculateTotal(quantity, term);

		this.setState(
			{
				cargando: true
			},
			() => {
				setTimeout(() => {
					this.setState({
						total,
						quantity,
						term,
						loading: false
					});
				}, 3000);
			}
		);
	};

	render() {
		const { total, term, quantity, loading } = this.state;

		let component;

		if (total === '' && !loading) {
			component = <Message />;
		} else if (loading) {
			component = <Spinner />;
		} else {
			component = <Result total={total} term={term} quantity={quantity} />;
		}
		return (
			<Fragment>
				<h1>Loan quote</h1>
				<div className="container">
					<Formulario loanData={this.loanData} />
					<div className="messages">{component}</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
