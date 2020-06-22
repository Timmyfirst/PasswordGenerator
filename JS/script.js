// Fonction de génération
function Generator(){
	var i = document.getElementById('nb_car').value;
	if (VerifyWholeNatural(i)){
		if (parseInt(i) <= 5) {
			alert('Veuillez renseigner un chiffre ou un nombre supérieur à 5.');
		}
		else {

			var result="";

			var caracteres = [];
			for (compt = 65; compt < 91; compt++) {
	  			caracteres.push(compt);
			}
			for (compt = 97; compt < 123; compt++) {
	  			caracteres.push(compt);
			}

			if (document.getElementById("chiffres").checked == true)
				var b_chi = true;
			else
				var b_chi = false;

			if (document.getElementById("carnas").checked == true)
				var b_crn = true;
			else
				var b_crn = false;

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

			for (compt = 0; compt <= parseInt(i); compt++) {
				result += String.fromCharCode(caracteres[parseInt(Math.random() * (caracteres.length - 0) + 0)]);
	  	}

	  	document.getElementById('result').value = result;
		}
	} else {
		alert('Veuillez renseigner un chiffre ou un nombre supérieur à 5.');
	}
}

// Fonction qui vérifie si le nombre renseigné est un entier naturel
function VerifyWholeNatural(value){
	if((parseFloat(value) == parseInt(value)) && !isNaN(value) && value > 0){
      return true;
  } else {
      return false;
  }
}
