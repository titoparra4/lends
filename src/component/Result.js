import React from 'react';

const Result = (props) => {
	return (
		<div className="u-full-width result">
			<h2>Results</h2>
			<p>The amount requested was: $ {props.quantity}</p>
			<p>To pay in {props.term} Moths</p>
			<p>Total to pay: $ {props.total} Moths</p>
			<p>Your monthly payment is: $ {(props.total / props.term).toFixed(2)} Monthly</p>
		</div>
	);
};

export default Result;
