function capitalize_Words(str){
	// charAt recupere le premier caractere de la chaine  splice recupere le reste de la chaine
 return str.charAt(0).toUpperCase() + str.slice(1);
}
function clickDrive(item,monLi){
	var fVW = document.createElement("ul");
	fVW.id = "contentDesc";
	monLi.appendChild(fVW);
	//var titre= document.getElementById("name").innerHTML = item.Nom.toUpperCase() + "\u0020" + capitalize_Words(item.Prenom);
	var contentDesc = document.getElementById("contentDesc"); 
	contentDesc.innerHTML = null;
	for (key in item) {
		if (key !== 'ID') {
			//console.log(key);
			//console.log( key +":"+item[key]);
			var contentLi = document.createElement('li');
			//innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.
			contentLi.innerHTML = key +":"+item[key];
			//inserer un element html dans un contenu li dans ul
			contentDesc.appendChild(contentLi);
		}
	}

}
function creatUl(){
	var ul = document.createElement('ul');
	ul.id ="listeContainer";
	document.body.appendChild(ul);
}
function ClickEditForm(item,monLi){
	for (key in item) {
		if (key == 'ID') {
 			var champs = document.createElement("input");
 				champs.type ="hidden";
 				champs.value = item[key];
 				champs.name =key;
 			//innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.
	 	}else if (key == 'site_pref' || key == 'app_pref' || key == 'Pourquoi_S' || key == 'before_IFA' || key == 'pourquoi_IFA') {
	 		var champs = document.createElement("textarea");
					champs.value = item[key];
	 			champs.name =key;
		}else if (key == 'Mail'){
			var champs = document.createElement("input");
	 			champs.type ="email";
	 			champs.value = item[key];
	 			champs.name =key;

	 	}else {
	 		// si mes champs sont  j'affiche input type text
	 			var champs = document.createElement("input");
	 				champs.type ="text";
	 				champs.value = item[key];
	 				champs.name =key;
	 			//innerHTML récupère ou définit tout le balisage et le contenu au sein d'un élément donné.
	 	}
		champs.innerHTML = key +":"+item[key];
			//inserer un element html dans un contenu li dans ul
			monLi.appendChild(champs);
			
	}
	
}




	
	
	// form.method = "#";

	// var nom = document.createElement("input");
	// nom.type ="text";
	// nom.value = item.Nom;
	// nom.name ="Nom";
	// var prenom = document.createElement("input");
	// prenom.type ="text";
	// prenom.value = item.Prenom;
	// prenom.name ="Prenom";
	// var js = document.createElement("input");
	// js.type ="text";
	// js.value = item.Javascript;
	// js.name ="Javascript";
	// var sp = document.createElement("input");
	// sp.type ="text";
	// sp.value = item.site_pref;
	// sp.name ="site_pref";
	// var ps = document.createElement("textarea");
	// ps.value = item.Pourquoi_S;
	// ps.name ="Pourquoi_S";
	// // var ap = document.createElement("input");
	// // ap.type ="text";
	// // ap.value = app_pref;
	// // ap.name ="app_pref";
	// var bi = document.createElement("textarea");
	// bi.value = item.before_IFA;
	// bi.name ="before_IFA";
	// var pi = document.createElement("textarea");
	// pi.value = item.pourquoi_IFA;
	// pi.name ="pourquoi_IFA";
	// var ml = document.createElement("input");
	// ml.type ="email";
	// ml.value = item.Mail;
	// ml.name ="Mail";
	// //je l'affiche dans le dom
	// form.appendChild(nom,prenom,js, sp, ps, bi, pi, ml);
	// document.body.appendChild(form);

