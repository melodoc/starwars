'use strict';

const getData = async function (url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response, status}`)
    }
    return await response.json();
};

getData('./db/episodes.json');

function createCardEpisode(episode) {
    const cardsEpisodes = document.querySelector('.slider-card');
    const { year, rating, name, image } = episode;
    const card = document.createElement('div');
    card.classList.add('slider-card-item');
    card.info = [year, rating, name, image]

    card.insertAdjacentHTML('beforeend', `
             <img src="${image}" alt="" class="slider-card-image">
             <div class="slider-card-year content">${year}</div>
             <div class="slider-card-name content">${name}</div>
             <div class="slider-card-rating content">${rating}</div>
 `);
    cardsEpisodes.insertAdjacentElement('beforeend', card);
}

function init() {
    getData('./db/episodes.json').then(function (data) {
        data.forEach(createCardEpisode)
    });
}

init();