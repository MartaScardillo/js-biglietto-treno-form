// VARIABILI BASE
const KM_FEE = 0.21;
const DISCOUNT_MINORS = 20;
const DISCOUNT_OVER_65 = 40;

let discount = 0;

let fullNameDOMElement = document.getElementById("fullName");
let kmDOMElement = document.getElementById("km");
let ageSelectDOMElement = document.getElementById("ageSelect");

// RICHIAMO L'INPUT 'GENERA'
const generateButtonDOMElement = document.getElementById("generateButton");
generateButtonDOMElement.addEventListener("click", function () {
  // RACCOLGO I VALORI DEGLI INPUT
  const fullName = fullNameDOMElement.value;
  console.log(fullName);
  const km = parseFloat(kmDOMElement.value);
  console.log(km);
  const age = ageSelectDOMElement.value;
  console.log(age);
});
