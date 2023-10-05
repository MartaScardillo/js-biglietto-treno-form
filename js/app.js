// VARIABILI BASE
const KM_FEE = 0.21;
const DISCOUNT_MINORS = 20;
const DISCOUNT_OVER_65 = 40;

let discount = 0;
let ticketType = 'Standard'

const fullNameDOMElement = document.getElementById("fullName");
const kmDOMElement = document.getElementById("km");
const ageSelectDOMElement = document.getElementById("ageSelect");
const ticketDOMElement = document.getElementById('ticket')

// RICHIAMO L'INPUT 'GENERA'
const generateButtonDOMElement = document.getElementById("generateButton");
generateButtonDOMElement.addEventListener("click", function () {
  // RACCOLGO I VALORI DEGLI INPUT
  const fullName = fullNameDOMElement.value;
  console.log(fullName);
  const km = parseFloat(kmDOMElement.value);
  console.log(km + "km");
  const age = ageSelectDOMElement.value;
  console.log(age);

  const price = km * KM_FEE;
  console.log(price + "€");

  // if, else if
  if (age == "minor") {
    discount = price * (DISCOUNT_MINORS / 100);
    ticketType = 'Ridotto'
  } else if (age == "elder") {
    discount = price * (DISCOUNT_OVER_65 / 100);
    ticketType = 'Over 65'
  }

  let discountedPrice = price - discount;
  console.log(discountedPrice + " " + discount);
  const finalPrice = discountedPrice.toFixed(2);
  console.log(finalPrice + "€");

  const coachRandom = Math.floor(Math.random() * 10) + 1
  const codeRandom = Math.floor(Math.random() * 89999) + 10000

  console.log(coachRandom)

  ticketDOMElement.innerHTML = 
  '<h2>IL TUO BIGLIETTO</h2>' +
  '<div>' +
      '<h3>DETTAGLIO PASSEGGERO</h3>' +
      '<table>' +
          '<thead>' +
              '<tr>' +
                  '<th class="bg-gray">Nome Passeggero</th>' +
                  '<th>Offerta</th>' +
                  '<th>Carrozza</th>' +
                  '<th>Codice CP</th>' +
                  '<th>Costo Biglietto</th>' +
              '</tr>' +
          '</thead>' +
          '<tbody>' +
              '<tr>' +
                  '<th>' + fullName + '</th>' +
                  '<td> Biglietto ' + ticketType + '</td>' +
                  '<td>' + coachRandom + '</td>' +
                  '<td>' + codeRandom + '</td>' +
                  '<td>' + finalPrice + '€ </td>' +
              '</tr>' +
          '</tbody>' +
      '</table>' +
  '</div>'
});
