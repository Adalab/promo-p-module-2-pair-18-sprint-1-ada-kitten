"use strict";

document.querySelector('.js-new-form').classList.remove("collapsed");

const catName1 = "Anastacio";
function removeHttps(url) {
    return url.replace(/^https?:\/\//, '');
}
const catImage1 = removeHttps("https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg");

const catRace = "British Shorthair";
const catDescription = "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const catName2 = "Fiona";
const catImage2 = "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";

const catName3 = "Fiona";
const catImage3 = "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";


const jsList = document.querySelector(".js-list");
const listCard1 = `<li class="card"><article><img class="card_img" src=${catImage1} alt="gatito" /> <h3 class="card_title">${catName1.toUpperCase()} </h3> <h4 class="card_race">${catRace}</h4> <p class="card_description">${catDescription} </p> </article></li>`;

const listCard2 = `<li class="card"><img class="card_img" src=${catImage2} alt="gatito" /> <h3 class="card_title">${catName2}</h3> <h4 class=>${catRace}</h4> <p class="card_description">${catDescription} </p> </li>`;

const listCard3 = `<li class="card"> <img class="card_img" src=${catImage3} alt="gatito"/> <h3 class="card_title">${catName3}</h3> <h4 class="card_race">${catRace}</h4> <p class="card_description">${catDescription}</p></li>`;

jsList.innerHTML = listCard1 + listCard2 + listCard3;