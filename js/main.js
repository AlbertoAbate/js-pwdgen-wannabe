// get data from name
var firstName = prompt("quale è il tuo nome?");
// Output

// primo metodo visualizzazione console
console.log("first name: ", firstName);

//secondo metodo per visualizzazione html
document.getElementById('name').innerHTML = "Il mio nome è " + firstName;


// get data from lastname
var lastName = prompt("quale è il tuo cognome?");
// primo metodo visualizzazione console
console.log("last name: ", lastName);
//secondo metodo per visualizzazione html
document.getElementById('cognome').innerHTML = "Il mio cognome è " + lastName;


// get data from lastname
var colore = prompt("quale è il tuo colore preferito?");
// primo metodo visualizzazione console
console.log("colore preferito: ", colore);
//secondo metodo per visualizzazione html
document.getElementById('color').innerHTML = "Il mio colore preferito è il " + colore;


//nomecognomecolorepreferito19

var passwordGenerator = firstName + lastName + colore + 19;
//console.log(passwordGenerator);

//data output

document.getElementById('password').innerHTML = passwordGenerator;




var primaInfo = "nome";
var secondaInfo = "cognome";
var terzaInfo = "colorepreferito";
var quartaInfo = "19";
var fullInfo = primaInfo + secondaInfo + terzaInfo + quartaInfo;
// primo metodo visualizzazione console
console.log(fullInfo);
//secondo metodo per visualizzazione html
document.getElementById('completo').innerHTML = fullInfo;
