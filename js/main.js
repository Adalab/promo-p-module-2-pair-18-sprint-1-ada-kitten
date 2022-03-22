"use strict";
const newForm = document.querySelector(".js-new-form");

const catName1 = "Anastacio";
const catImage1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";

const catRace1 = "British Shorthair";
const catDescription1 =
  "Risueño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const catName2 = "Fiona";
const catImage2 =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const catRace2 = "British Shorthair";
const catDescription2 =
  "Risueño, juguetón, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const catName3 = "Cielo";
const catImage3 =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const catRace3 = "British Shorthair";
const catDescription3 =
  "Risueño, juguetón, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const inputSearchDesc = document.querySelector(".js_in_search_desc");
inputSearchDesc.value = "cariñoso";
const descrSearchText = inputSearchDesc.value;

const jsList = document.querySelector(".js-list");

if (catDescription1.includes(descrSearchText)) {
  const listCard1 = `<li class="card"><article><img class="card_img" src=${catImage1} alt="gatito" /> <h3 class="card_title">${catName1.toUpperCase()} </h3> <h4 class="card_race">${catRace1}</h4> <p class="card_description">${catDescription1} </p> </article></li>`;
  jsList.innerHTML = jsList.innerHTML + listCard1;
}

if (catDescription2.includes(descrSearchText)) {
  const listCard2 = `<li class="card"><img class="card_img" src=${catImage2} alt="gatito" /> <h3 class="card_title">${catName2}</h3> <h4 class=>${catRace2}</h4> <p class="card_description">${catDescription2} </p> </li>`;
  jsList.innerHTML = jsList.innerHTML + listCard2;
}

if (catDescription3.includes(descrSearchText)) {
  const listCard3 = `<li class="card"> <img class="card_img" src=${catImage3} alt="gatito"/> <h3 class="card_title">${catName3}</h3> <h4 class="card_race">${catRace3}</h4> <p class="card_description">${catDescription3}</p></li>`;
  jsList.innerHTML = jsList.innerHTML + listCard3;
}

/*
let texto = "Holi";
texto = texto + " Rosa";

jsList.innerHTML = jsList.innerHTML + listCard3;

jsList.innerHTML = listCard1 + listCard2 + listCard3;
*/

const card = document.querySelector(".card");

if (catDescription.includes(descrSearchText)) {
  card.classList.remove("collapsed");
} else {
  card.classList.add("collapsed");
}

if (newForm.classList.contains("collapsed")) {
  newForm.classList.remove("collapsed");
} else {
  newForm.classList.add("collapsed");
}
