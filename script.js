// Je recupere mon btn et mon h2
const btn = document.getElementById("btn");
const resulta = document.getElementById("result");

function randomnumber(min, max) {
  // Function pour générer un nombre aléatoire entre deux argument choisis et je le stock dans une variable
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//J'appelle ma function en entrant les deux arguments nécéssaire pour ensuite la stocker dans la variable justeprix pour pouvoir la réutiliser
let justeprix = randomnumber(1, 550);

// Je déclare mon compteur d'essais
let essais = 0;
// Créer un objet de configuration
let game = {
  justeprix: justeprix,
  try: essais,
};
// Déclaration du tableau pour stocker les juste prix
let score = [];
// Push dans l'array le premier justeprix
score.push(justeprix);
// console.log(result);  Si vous voulez affichez le result enlevez le commentaire de cette ligne
function play() {
  // Je demande a l'utilisateur un nombre
  let data = prompt("Quel est le prix ?");
  // Je transforme le prompt en parseInt car il génere uniquement du texte et je le veux en type number avec une base de 10 (Chiffre utilisé au quotidien)
  let dataparsed = parseInt(data, 10);
  // J'indique a l'utilisateur dans la console la valeur qu'il/elle a rentré dans le prompt
  console.log("Tu a rentrer " + dataparsed);
  // Je relance mon jeu si gagné
  if (dataparsed === justeprix) {
    // Case ou l'utilisateur réussi
    alert("Incroyable bien joué !");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");
    console.log("Fin du jeu bien jouer :) !");
    justeprix = randomnumber(1, 550);
    // J'insere le texte  + mon résultat
    resulta.textContent = "Le juste prix est : " + justeprix;
    // Je met dans mon array(score) le nouveau juste prix
    score.push(justeprix);
    console.log(score);
    play();
  } else if (dataparsed < justeprix) {
    alert("Plus grand :)");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");
    play();
    //Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
  } else if (dataparsed > justeprix) {
    alert("Plus petit :)");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");

    play();
  }
  // Case : Il n'a pas rentrer de nombre
  else if (dataparsed == "") {
    alert("Il faut rentrer un nombre");

    play();
  } else {
    // Case : Il a annuler
    alert("Tu a annuler");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");
  }
}

// J'att 1.25 secondes avant de lancer la function car sinon probleme de display avec le prompt sur le screen
setTimeout(() => {
  play();
}, 1250);
// btn ou je lance la function si vous annulez le prompt
btn.addEventListener("click", play);
