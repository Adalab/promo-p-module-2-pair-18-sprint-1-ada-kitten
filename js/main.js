"use strict";

document.querySelector('.js-new-form').classList.remove("collapsed");

const jsList = document.querySelector(".js-list");
const listCard1 = '<li class="card"><article><img class="card_img" src="https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" alt="gatito" /> <h3 class="card_title">Anastacio</h3> <h4 class="card_race">British Shorthair</h4> <p class="card_description">Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! </p> </article></li>';
const listCard2 = ' <li class="card"><img class="card_img" src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg" alt="gatito" /> <h3 class="card_title">Fiona</h3> <h4 class="card_race">British Shorthair</h4> <p class="card_description"> Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! </p> </li>';

const listCard3 = '<li class="card"> <img class="card_img" src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg" alt="gatito"/> <h3 class="card_title">Cielo</h3> <h4 class="card_race">British Shorthair</h4> <p class="card_description"> Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle! </p></li>';

jsList.innerHTML = listCard1 + listCard2 + listCard3;