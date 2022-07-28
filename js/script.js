/////////////////BURGER/////////////////////////////////////////////////////////
(function () {
    const body = document.querySelector('body');
    const burger = document.querySelector('.header__icon');
    const menu = document.querySelector('.header__column-menu');
    const menuBtn = document.querySelector('.menu__button');
    burger.addEventListener('click', onMenuClick);

    function onMenuClick() {
        burger.classList.toggle('active');

        if (burger.classList.contains('active')) {
            body.classList.add('lock');
            menu.classList.add('active');
        } else {
            body.classList.remove('lock');
            menu.classList.remove('active');
        }
    }

    window.addEventListener('resize', adaptive);

    function adaptive() {
        const w = document.documentElement.clientWidth;
        addClass(w);
    }

    function addClass(w) {
        if (w < 769) {
            menuBtn.classList.add('btn-p');
        } else {
            menuBtn.classList.remove('btn-p');
        }
    }

    adaptive();
})();
