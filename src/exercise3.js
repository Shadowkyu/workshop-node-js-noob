exports.run = function(input) {
	var multiply = new Boolean("false");
	function calcul (a, b, c){
	  	var a = 2;
	  	var b = 5;
	  	var c = 3;
	  	var result = 6;
	  	if (a*b <= 6){
	  		multiply = true;
	  	}
	  	else{
	  		multiply = false;
	  	}
	  	if (a*c <= 6){
	  		multiply = true;
	  	}
	  	else{
	  		multiply = false;
	  	}
	  	if (b*c <= 6){
	  		multiply = true;
	  	}
	  	else{
	  		multiply = false;
	  	}
	return (result);
    }
};
