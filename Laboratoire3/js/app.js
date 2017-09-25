import { Toast } from './toast.js';

//Recuperer les boutons
const success = document.getElementById("success");
const info = document.getElementById("info");
const erreur = document.getElementById("erreur");

//Modifier les fonctions onclick
success.onclick = function(){ addToast("toastSuccess"); }
info.onclick = function(){ addToast("toastInfo"); }
erreur.onclick = function(){ addToast("toastErreur"); }

//Fonction qui creer et affiche une toast
function addToast(type) {
    const theToast = new Toast(type);
    theToast.showToast();
}
