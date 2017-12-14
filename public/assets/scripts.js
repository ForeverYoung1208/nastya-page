// scripts.js

(function(){

	buttonClick = function( msg ){
	  alert(msg)
	};

	plus = function(){
	  var res = parseFloat( $('#number1').val() ) + parseFloat( $('#number2').val() );
	  alert(res)
	}

})()