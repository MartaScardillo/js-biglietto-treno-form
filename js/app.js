// VARIABILI BASE
const KM_FEE = 0.21;
const DISCOUNT_MINORS = 20;
const DISCOUNT_OVER_65 = 40;

let ticketType = 'Standard'

const fullNameDOMElement = document.getElementById("fullName");
const kmDOMElement = document.getElementById("km");
const ageSelectDOMElement = document.getElementById("ageSelect");
const ticketDOMElement = document.getElementById('ticket')

// RICHIAMO L'INPUT 'GENERA'
const generateButtonDOMElement = document.getElementById("generateButton");
generateButtonDOMElement.addEventListener("click", function () {
    // RACCOLGO I VALORI DEGLI INPUT
    let discount = 0;
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
  '<div class="pt-5">' +
  '<h2 class="d-flex justify-content-center pb-5">IL TUO BIGLIETTO</h2>' +
  '<div class="container bg-ticket d-flex flex-column align-items-center pb-5">' +
  '<h2 class="pt-5">POLAR EXPRESS</h2>' +
  '<h3 class="pb-4">ROUND TRIP</h3>' +
      '<table>' +
          '<thead>' +
              '<tr>' +
                  '<th class="px-3 pb-3">Nome Passeggero</th>' +
                  '<th class="px-3 pb-3">Offerta</th>' +
                  '<th class="px-3 pb-3">Carrozza</th>' +
                  '<th class="px-3 pb-3">Codice CP</th>' +
                  '<th class="px-3 pb-3">Costo Biglietto</th>' +
              '</tr>' +
          '</thead>' +
          '<tbody>' +
              '<tr>' +
                  '<th class="text-center">' + fullName + '</th>' +
                  '<td class="text-center"> Biglietto ' + ticketType + '</td>' +
                  '<td class="text-center">' + coachRandom + '</td>' +
                  '<td class="text-center">' + codeRandom + '</td>' +
                  '<td class="text-center">' + finalPrice + '€ </td>' +
              '</tr>' +
          '</tbody>' +
      '</table>' +
  '</div>' +
  '</div>'
});
