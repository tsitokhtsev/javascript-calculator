import React, { useState } from 'react'

import './App.css'

const numbers = {
	'zero': '0',
	'one': '1',
	'two': '2',
	'three': '3',
	'four': '4',
	'five': '5',
	'six': '6',
	'seven': '7',
	'eight': '8',
	'nine': '9'
}

const operations = {
	'add': '+',
	'subtract': '-',
	'multiply': '*',
	'divide': '/'
}

const App = () => {
	const renderedButtons = (obj, type) => {
		return Object.keys(obj).map(item =>
			<button
				key={item}
				className={`button ${type}`}
				id={item}
				style={{ gridArea: item }}
				onClick={e => handleClick(e)}
			>
				{obj[item]}
			</button>
		)
	}

	const [currentNumber, setCurrentNumber] = useState('0')
	const [previousNumber, setPreviousNumber] = useState()
	const [expression, setExpression] = useState('0')

	const isOperation = value => {
		return Object.values(operations).indexOf(value) !== -1
	}

	const handleClick = e => {
		const value = e.target.innerHTML

		if (value === '.') {
			if (!currentNumber.includes('.') && !isOperation(currentNumber)) {
				setCurrentNumber(currentNumber + value)
				setExpression(expression + value)
			}
		} else if (value === '=') {
			if (isOperation(currentNumber)) {
				setExpression(expression.slice(0, -1) + value + previousNumber)
				setCurrentNumber(previousNumber)
			} else {
				let answer = Math.round(1000000000000 * eval(expression)) / 1000000000000
				setExpression(expression + value + answer)
				setCurrentNumber(answer)
			}
			setPreviousNumber(value)
		} else if (isOperation(value)) {
			if (currentNumber[currentNumber.length - 1] === '.' || isOperation(currentNumber)) {
				if (value !== '-') {
					setExpression(expression.replace(/[+*/]-?$/, value))
				} else {
					setExpression(expression + value)
				}
			} else if (previousNumber === '=') {
				setExpression(currentNumber + value)
			} else {
				setExpression(expression + value)
			}
			setPreviousNumber(currentNumber)
			setCurrentNumber(value)
		} else {
			if (isOperation(currentNumber) || expression.includes('=')) {
				setCurrentNumber(value)
			} else {
				setCurrentNumber(currentNumber === '0' ? value : currentNumber + value)
			}
			setExpression(expression.includes('=')
				? value
				: currentNumber === '0' || expression === '0'
					? expression.slice(0, -1) + value
					: expression + value)
		}
	}

	const clear = () => {
		setCurrentNumber('0')
		setPreviousNumber(undefined)
		setExpression('0')
	}

	return (
		<div id="calculator" >
			<div id="screen">
				<span id="expression">{expression}</span>
				<span id="display">{currentNumber}</span>
			</div>
			<div id="buttons">
				<button className="button" id="clear" onClick={() => clear()}>ac</button>
				{renderedButtons(numbers, 'number')}
				{renderedButtons(operations, 'operation')}
				<button className="button" id="decimal" onClick={e => handleClick(e)}>.</button>
				<button className="button operation" id="equals" onClick={e => handleClick(e)}>=</button>
			</div>
		</div >
	)
}

export default App