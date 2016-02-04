var buttons = document.getElementsByClassName("btn");
//run through all elements and add eventListener for clicks
for (var i = 0; i < buttons.length; i++) {
  	buttons[i].addEventListener('click', function(e) {
		var calcScreen = document.getElementById('screen-calc');
		var btnVal = this.innerHTML;
		var screenLength = calcScreen.innerHTML.length;
		var clearScreen = false;


	    //Can't repeat symbol or 0. 
	   	if( isNaN(btnVal) && isNaN( calcScreen.innerHTML.charAt(screenLength - 1) ) || btnVal == '0' && calcScreen.innerHTML.charAt(screenLength - 1) == '0' ) {
			var deleteLast = calcScreen.innerHTML.slice(0, -1);
			calcScreen.innerHTML = deleteLast;
	   	}

		////////with Switch
		switch(btnVal) {
		//Delete everything
		case 'C':
			calcScreen.innerHTML = '';
			break;
		//delete last character;
		case 'CE':
			var deleteLast = calcScreen.innerHTML.slice(0, -1);
			calcScreen.innerHTML = deleteLast;
			break;
		//calculate %
		case '%':
			var substring = '';
			if (calcScreen.innerHTML.indexOf('+') > -1) {substring = '+'}
			if (calcScreen.innerHTML.indexOf('-') > -1) {substring = '-'}
			if (calcScreen.innerHTML.indexOf('/') > -1) {substring = '/'}
			if (calcScreen.innerHTML.indexOf('*') > -1) {substring = '*'}
				alert(substring);

			if (calcScreen.innerHTML.indexOf(substring) > -1 && substring != '') {
				var percString = calcScreen.innerHTML.split(substring);
				var percEquation = eval(percString[1] / 100 * percString[0]);
				calcScreen.innerHTML = percEquation;
			} else {
				calcScreen.innerHTML = calcScreen.innerHTML / 100;
			}
			break;
		//get result
		case '=':
			calcScreen.innerHTML = eval(calcScreen.innerHTML);
			// clearScreen = true;
			break;
			
		default:
			calcScreen.innerHTML += btnVal;
			break;
		}

		//just allow first hit to be a number or minus button
		if ( screenLength < 1 && (isNaN(btnVal) && btnVal != '-') ) {
		  calcScreen.innerHTML = '';
		}

		//keep max characters 14
		if( screenLength >= 14 ) {
			var maxChar = calcScreen.innerHTML.slice(0, 14);
			calcScreen.innerHTML = maxChar;
		  
		}

		//clear screen
	   	if(btnVal != '' && clearScreen == true) {
	   		calcScreen.innerHTML = '';
	   	}

		
	});
};