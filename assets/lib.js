var buttons = document.getElementsByClassName("btn");
//run through all elements and add eventListener for clicks
for (var i = 0; i < buttons.length; i++) {
  	buttons[i].addEventListener('click', function(e) {
		var calcScreen = document.getElementById('screen-calc');
		var btnVal = this.innerHTML;
		var screenLength = calcScreen.innerHTML.length;

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
		//get result
		case '=':
			var substring = "%";
			//check if % is part of the text on calc screen
			if (calcScreen.innerHTML.indexOf(substring) > -1) {
				var percString = calcScreen.innerHTML.split(substring);
				var percEquation = eval((percString[1] / 100) * percString[0]);
				calcScreen.innerHTML = percEquation;
			}
		else {
			var equation = calcScreen.innerHTML;            
			calcScreen.innerHTML = eval(equation);
			}
			break;
		default:
			calcScreen.innerHTML += btnVal;
			break;
		}

		//just allow first hit to be a number or minus button
		if ( screenLength < 1 && (isNaN(btnVal) && btnVal != '-') ) {
		  calcScreen.innerHTML = '';
		};

		//keep max characters 14
		if( screenLength >= 14 ) {
			var maxChar = calcScreen.innerHTML.slice(0, 14);
			calcScreen.innerHTML = maxChar;
		  
		}
		
	   //Can't repeat symbol. 
	   	if( isNaN(btnVal) && isNaN( calcScreen.innerHTML.charAt(screenLength - 1) ) ) {
			var deleteLast = calcScreen.innerHTML.slice(0, -1);
			calcScreen.innerHTML = deleteLast;
	   	}
	});
};