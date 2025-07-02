let gamburBtn = document.querySelector('.user-panel__btn');
let sectRecomend = document.querySelector('.recomend-g');

gamburBtn.addEventListener('click', () => {
    sectRecomend.classList.toggle('recomend-g--active');
})