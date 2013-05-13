//a changer pour la mise en production
//Mettre l'adresse du serveur
var serviceURL = "http://192.168.0.100:8080/TestRest/rest/";


$(document).ready( function () { 
	$("#connexionForm").submit( function() { 
		var $inputs = $("#connexionForm").find("input, select, button, textarea");
		// serialize the data in the form
		var serializedData = $("#connexionForm").serialize();
		// � la soumission du formulaire						 
		$.ajax({ // fonction permettant de faire de l'ajax
			type: "POST", // methode de transmission des donn�es au fichier php
			url: serviceURL+"authentification",// url du fichier du WS
			data: serializedData, // donn�es � transmettre
			datatype:"string",
			success: function(msg){ // si l'appel a bien fonctionn�
				if(msg=="error") 
					alert('Veuillez entrer un identifiant et un mot de passe valide');
				else{
					alert('Authentification r�ussie ! identifiant : '+msg);
					window.localStorage.setItem("identifiant", msg);
					document.location.href="home.html?id="+msg+"";
				}
			}
		});
		
		return false; // permet de rester sur la m�me page � la soumission du formulaire
	});
});



