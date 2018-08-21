function generator(chi,crn){
	var i=document.getElementById('nb_car').value;
	if (parseInt(i) <= 5) {
		alert('Veuillez mettre un chiffre supérieur à 5');
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

		//document.getElementById(carna
		if (document.getElementById(chi).checked == true)
			var b_chi = true;
		else
			var b_chi = false;
		
		if (document.getElementById(crn).checked == true)
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
    
	
}

