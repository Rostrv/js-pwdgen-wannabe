//generatore password

//chiedere nome
const first_name = prompt("Inserisci Nome")

console.log(first_name);

//chiedere cognome
const last_name = prompt("Inserisci Cognome")

console.log(last_name);

//chiedere colore preferito
const pref_color = prompt("Inserisci colore preferito")

console.log(pref_color);

//password
const password = first_name + last_name + pref_color + 22

console.log("${password}")

//output

document.getElementById("password").innerHTML = password