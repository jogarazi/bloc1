let cartes = new Array();
let score = 0;

function initialization() {
    nouvellePartie();

    //TODO-1: ajouter 1 carte dès le début
    let carte = nouvelleCarte();
    majScore(carte);
    ajouterCarte(imageCarte(carte));

    //TODO-2: ajouter le listener sur le bouton
    addButtonListener();
}

function nouvellePartie() {
	for (let i = 1; i < 53; i++) { 
	    cartes[i] = 0;
	}
}

function nouvelleCarte() {
	let i = Math.floor((Math.random()*52)+1);
    while (cartes[i] != 0) {
        i = Math.floor((Math.random()*52)+1);
    }
    return i;
}

function majScore(carte) {
    let modulo13 = carte % 13;
    let valeur = modulo13 <=1 || modulo13 >= 10 ? 10 : modulo13;
    score = score + valeur;
    document.getElementById("score").innerHTML = score;
}

function ajouterCarte(src) {
    let img = document.createElement('img');
    img.src = src;
    img.id = Math.random().toString(36).substring(2, 15);
    img.draggable = true;
    img.ondragstart = drag;
    img.ondragover = allowDrop;
    img.ondrop = drop;
    document.getElementById("mes-cartes").appendChild(img);
}

function imageCarte(i) {
    if (i < 10) {
        return `./img/0${i}.BMP`;
    } else {
        return `./img/${i}.BMP`;
    }
}

function clickOnAjouterCarte() {
    //TODO-3: ajouter une carte
    let carte = nouvelleCarte();
    majScore(carte);
    ajouterCarte(imageCarte(carte));
    if (score > 21) {
        alert(`niveau maximum dépassé (niveau = ${score})`);
        document.getElementById("boutton-ajout-carte").disabled = true;
    }
}

function addButtonListener() {
    let ajouterCarteButton = document.getElementById("boutton-ajout-carte");
    ajouterCarteButton.onclick = clickOnAjouterCarte;
}


function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let srcElt = document.getElementById(data);
    let filename = ev.target.src;
    ev.target.src = srcElt.src;
    srcElt.src = filename;
}

window.onload = initialization;