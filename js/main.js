'use strict';

const cardsepisodes = document.querySelector('.slider__card');

const getData = async function (url) {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response, status}`)
    }

    return await response.json();

};

getData('./db/episodes.json');


function createCardEpisode(episode) {

    const { year, rating, name, image } = episode;
    const card = document.createElement('div');

    card.classList.add('slider__card-item');

    card.info = [year, rating, name, image]

    card.insertAdjacentHTML('beforeend', `
             <img src="${image}" alt="" class="slider__card-image">
             <div class="slider__card-year content">${year}</div>
             <div class="slider__card-name content">${name}</div>
             <div class="slider__card-rating content">${rating}</div>
 `);
    cardsepisodes.insertAdjacentElement('beforeend', card);
}


function init() {
    getData('./db/episodes.json').then(function (data) {
        data.forEach(createCardEpisode)
    });
}

init();