// Je recupere mon btn et mon h2
const btn = document.getElementById("btn");
const resulta = document.getElementById("result");
// Je génére le nombre je le multiplie par 500 et je l'arrondis
let launch = Math.random();
let multiply = launch * 500;
let result = Math.round(multiply);

// Compteur d'essais
let essais = 0;
// console.log(result);  Si vous voulez affichez le result enlevez le commentaire de cette ligne
function justeprix() {
  // Je demande a l'utilisateur un nombre
  let data = prompt("Quel est le prix ?");
  // Je transforme le prompt en parseInt car il génere uniquement du texte et je le veux en type number
  let dataparsed = parseInt(data, 10);
  // J'indique a l'utilisateur dans la console la valeur qu'il/elle a rentré dans le prompt
  console.log(dataparsed);

  if (dataparsed === result) {
    // Case ou l'utilisateur réussi
    alert("Incroyable bien joué !");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");
    console.log("Fin du jeu bien jouer :) !");
    // J'insere le texte  + mon résultat
    resulta.textContent = "Le juste prix est : " + result;

    // Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
  } else if (dataparsed < result) {
    alert("Plus grand :)");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");

    justeprix();
    //Tant que la valeur saisie n'est pas la bonne, on lui demande à nouveau
  } else if (dataparsed > result) {
    alert("Plus petit :)");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");

    justeprix();
  }
  // Case : Il n'a pas rentrer de nombre
  else if (dataparsed === "") {
    alert("Il faut rentrer un nombre ");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");

    justeprix();
  } else {
    // Case : Il a annuler
    alert("Tu a annuler");
    essais++;
    console.log("Tu a réaliser " + essais + " essais");
  }
}

// J'att 1.25 secondes avant de lancer la function car sinon probleme de display avec le prompt sur le screen
setTimeout(() => {
  justeprix();
}, 1250);
// btn ou je lance la function si vous annulez le prompt
btn.addEventListener("click", justeprix);
