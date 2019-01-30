var decimalButton = document.getElementById('calculator-decimal');
var clearButton = document.getElementById('calculator-clear');
var backspaceButton = document.getElementById('calculator-backspace');
var displayValElement = document.getElementById('calculator-display');

var displayVal = '0'; /*0 is the default value */
var pendingVal; /*Holding value*/
var evalStringArray = []; /*Stores all values */ 

/* Array by class*/
var calcNumButtons = document.getElementsByClassName('calculator-number');
var calcOperatorButtons = document.getElementsByClassName('calculator-operator');

/* clickObj automatically passes click event to the function*/
var updateDisplayVal = (clickObj) => { 
	var btnText = clickObj.target.innerText;
	/* Check display for 0, then changes when there is a value to it */
	if(displayVal === '0'){
		displayVal = '';
	}
	displayVal += btnText;
	displayValElement.innerText = displayVal;
}
var performOperation = (clickObj) => {
	var operator = clickObj.target.innerText;
	switch(operator) {
		case '+':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push('+');
			break;
		case '-':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push('-');
			break;
		case 'x':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push('*');
			break;
		case '÷':
			pendingVal = displayVal;
			displayVal = '0';
			displayValElement.innerText = displayVal;
			evalStringArray.push(pendingVal);
			evalStringArray.push('/');
			break;
		case '=':
			evalStringArray.push(displayVal);
			var evaluation = eval(evalStringArray.join(''));
			displayVal = evaluation + '';
			displayValElement.innerText = displayVal;
			evalStringArray = [];
			break;
		}
}

/* Click event on numbers*/
for(var i=0; i < calcNumButtons.length; i++) {
	calcNumButtons[i].addEventListener('click', updateDisplayVal, false);
}
/* Click event for operators*/
for(let i=0; i < calcOperatorButtons.length; i++) {
	calcOperatorButtons[i].addEventListener('click', performOperation, false);
}

clearButton.onclick = () => {
	displayVal = '0'
	evalStringArray = [];
	displayValElement.innerHTML = displayVal;
}
backspaceButton.onclick = () => {
	/* Take the index of last string and removes it */
	let lengthOfDisplayVal = displayVal.length;
	displayVal = displayVal.slice(0,lengthOfDisplayVal - 1);
	/* Check if displayVal is empty*/
	if(displayVal === '') {
		displayVal = '0';
	}
	displayValElement.innerHTML = displayVal;
}
decimalButton.onclick = () => {
	/* Not false is true */
	if(!displayVal.includes('.')){
		displayVal += '.';
	}
	displayValElement.innerHTML = displayVal;
}