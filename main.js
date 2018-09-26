function pubSite() {
	var monText = 'Hey le site xxxvidsxxx est trop bien. Viens dessus stp please';
	window.alert(monText);
}

function pubSiteConfirmation() {
	var monTextConfirmation = 'Souhaites-tu visiter le célèbre et unique site "XXXVIDSXXX", qui est vraiment trop bien (Désactive le blocage de pop-up ;)) ?';
	if(window.confirm(monTextConfirmation)){
		window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
	}
}

var textBouton = document.getElementById('bouton').innerHTML;
document.getElementById('bouton').innerHTML = textBouton.toUpperCase();

function changementGraphique() {
	document.body.style.backgroundColor = 'magenta';
	
	mesParagraphes = document.querySelectorAll('p');
	mesH1 = document.querySelectorAll('h1');
	mesH2 = document.querySelectorAll('h2');
	mesH3 = document.querySelectorAll('h3');
	
	var compteurParagraphes;
	for(compteurParagraphes = 0; compteurParagraphes < mesParagraphes.length; compteurParagraphes++)
	{
		mesParagraphes[compteurParagraphes].style.color = 'blue';
		mesParagraphes[compteurParagraphes].style.fontFamily = 'Arial';
	}

	var compteurH1;
	for(compteurH1 = 0; compteurH1 < mesH1.length; compteurH1++)
	{
		mesH1[compteurH1].style.color = 'green';
	}
	
	var compteurH2;
	for(compteurH2 = 0; compteurH2 < mesH2.length; compteurH2++)
	{
		mesH2[compteurH2].style.color = 'green';
	}

	var compteurH3;
	for(compteurH3 = 0; compteurH3 < mesH3.length; compteurH3++)
	{
		mesH3[compteurH3].style.color = 'green';
	}
		
}

var boutonAction = document.getElementById('bouton');
boutonAction.onclick = function() {
	changementGraphique();
}

window.setTimeout(pubSiteConfirmation, 10000);