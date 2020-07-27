let generator = {};

/**
 * For generate the password.
 *
 * @param {}  should be define later.
 * @return {} should be define later.
 */
generator.main = function(){
	var i = document.getElementById('nb_car').value;
	if (generator.VerifyWholeNatural(i)){
		if (parseInt(i) <= 5) {
			alert('Veuillez renseigner un chiffre ou un nombre supérieur à 5.');
		}
		else {

			result = generator.Generate(i, document.getElementById("chiffres").checked == true, document.getElementById("carnas").checked == true)

	  	document.getElementById('result').value = result;
		}
	} else {
		alert('Veuillez renseigner un chiffre ou un nombre supérieur à 5.');
	}
}

/**
 * For know is it's a natural number.
 *
 * @param {int, bool, bool} An value that supposed to be a positive int.
 * @return {string} The result of the test.
 */
generator.Generate = function(nb_car, b_chi, b_crn){
	var result="";

	var caracteres = [];
	for (compt = 65; compt < 91; compt++) {
			caracteres.push(compt);
	}
	for (compt = 97; compt < 123; compt++) {
			caracteres.push(compt);
	}

	if (b_chi == true) {
		for (compt = 48; compt < 58; compt++) {
				caracteres.push(compt);
		}
	}

	if (b_crn == true) {
		for (compt = 33; compt < 46; compt++) {
				caracteres.push(compt);
		}
		for (compt = 58; compt < 65; compt++) {
				caracteres.push(compt);
		}
		for (compt = 91; compt < 97; compt++) {
				caracteres.push(compt);
		}
	}

	for (compt = 0; compt < parseInt(nb_car); compt++) {
		result += String.fromCharCode(caracteres[parseInt(Math.random() * (caracteres.length - 0) + 0)]);
	}

	return result
}

/**
 * For know is it's a natural number.
 *
 * @param {int} value An value that supposed to be a positive int.
 * @return {bool} The result of the test.
 */
generator.VerifyWholeNatural = function(value){
	if((parseFloat(value) == parseInt(value)) && !isNaN(value) && value > 0){
      return true;
  } else {
      return false;
  }
}

module.exports = generator;
