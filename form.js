var maListe = [];
maListe = Liste;
//je crée mon ul
creatUl();
//je récupère id de mon ul crée
var monUl = document.getElementById("listeContainer");
var form =  document.getElementById("listeContainer");

//var titH = document.createElement("h2");
// titH.name = "name";
// 	document.body.appendChild(titH);
//console.log(monUl);
//console.log(maListe.length);
// step3 : parcourir les données et effectuer le traitement sur chaque getElementById
// option 1 (boucle), ForEach
maListe.forEach(function(item) {
	var monLi = document.createElement('li');
	//je crée mon bouton édition;
	var button = document.createElement('input');
	button.type = "submit";
	button.id = "Submit";
	button.name = "Submit";
	button.value = "editer";
	//	monLi.setAttribute('userid', item.Id);
	//affiche les noms de mon json
	monLi.innerHTML = "<span>"+ item.Nom.toUpperCase() + "\u0020" + capitalize_Words(item.Prenom) + "</span>";
	//quand je click sur mon li j'affiche ma fiche
	monLi.addEventListener("click", function(event){
			clickDrive(item,monLi);
	});	
	//j'affiche mon ul et mon li dans le dom
	monUl.appendChild(monLi);
	monLi.appendChild(button);
	// edit mes infos
	button.addEventListener("click", function(event){
		ClickEditForm(item,monLi);
		monUl=null;
	})
});