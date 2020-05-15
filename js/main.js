'use strict';

const cardsepisodes = document.querySelector('.slider');

const getData = async function(url) {

const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response,status}`)
    }

    return await response.json();

};

getData('./db/episodes.json');


function createCardEpisode (episode) {

 const {year, rating, name , image} = episode;
 const card = document.createElement('a');

 card.classList.add('card');

 card.info = [year, rating, name, image]

 card.insertAdjacentHTML ('beforeend', `
        <div class="slider_card">
             <img src="${image}" alt="" class="slider_image">
             <div class="slider_year content">${year}</div>
             <div class="slider_name content">${name}</div>
             <div class="slider_rating content">${rating}</div>
         </div>
 `);
 cardsepisodes.insertAdjacentElement('beforeend', card);
}


function init() {
    getData('./db/episodes.json').then(function(data){
        data.forEach(createCardEpisode)
    });         
}

init();