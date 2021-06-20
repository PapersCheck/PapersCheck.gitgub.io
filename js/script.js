'use strict'

const wrapper = document.querySelector('.wrapper')
const conteiner = document.querySelector('.contaener')

let fontSize = 18



//создание карточек
let cardContent = `1

    `


//локика карточек
wrapper.onclick = function (event) {

    let card = event.target.closest('.card');

    //проверка на клик если !card то закрыть все карточки
    if (!card) {
        closeAllCard()
        return
    }
    if (!wrapper.contains(card)) {
        closeAllCard()
        return
    }

    //взятие у этой карточки 2 стороны
    let front = card.children[0];
    let back = card.children[1];

    // открытие карточки при том закрытие остальных карточек
    if (!card.classList.contains('card-active')) {
        closeAllCard()
        openMenu(front, back)
        card.classList.add('card-active')
    }

    //бургер меню
    burgerMenuCard(card, back)
};

/*/////////////////////////////////////////////////////////////////////////////*/

//открывает карточку
function openMenu(front, back) {
    front.style.transform = 'rotateY(180deg)'
    back.style.transform = 'rotateY(360deg)'
}

// закрывает карточки
function closeAllCard() {
    [].forEach.call(document.querySelectorAll('.card'), function (e) {
        e.classList.remove('card-active')
        e.children[0].style.transform = 'rotateY(0deg)'
        e.children[1].style.transform = 'rotateY(180deg)'
    });
}

/*/////////////////////////////////////////////////////////////////////////////*/

//бургер меню 
function burgerMenuCard(card, back){
    
    //открытие и закритие меню при нажатии на бургер
    if (event.target.closest('.toggle-burger-menu')) {
        toggleBurgerMenu(card)
        
    // закритие меню при нажатии всне его
    } else if (!event.target.closest('.burger-menu')) {
        closeBurgerMenu(card)

    //при клике добовление и удаление из избранного карточки
    } else if (event.target.closest('#add-and-remove-card')) {
        const addCard = event.target.closest('#add-and-remove-card').children[0];
        const removeCard = event.target.closest('#add-and-remove-card').children[1];
        //добавление и удаление карточек из избранных
        if (addCard.className === 'display-none') {
            addCard.classList.toggle('display-none')
            removeCard.classList.toggle('display-none')
        } else if (removeCard.className === 'display-none') {
            addCard.classList.toggle('display-none')
            removeCard.classList.toggle('display-none')
        }
    }

    //увеличение текста
    increaseFontSize(back)
}

/*/////////////////////////////////////////////////////////////////////////////*/

// открытие и закрытие бургера при клике на бургер
function toggleBurgerMenu(e) {
    const nameAfter = e.querySelector('.name-after');
    const burgerMenu = e.querySelector('.burger-menu');

    [].forEach.call(e.querySelectorAll('.burger-ico'), function (f) {
        f.classList.toggle('display-none')
    });

    nameAfter.classList.toggle('display-none');
    burgerMenu.classList.toggle('burger-menu-active');

}
// закрытие бургера при клике вне его
function closeBurgerMenu(e) {
    const nameAfter = e.querySelector('.name-after');
    const burgerMenu = e.querySelector('.burger-menu');

    [].forEach.call(e.querySelectorAll('.burger-ico'), function (f) {
        f.classList.add('display-none')
    });

    nameAfter.classList.remove('display-none');
    burgerMenu.classList.remove('burger-menu-active');

}

// увеличение и уменьшении размера текста
function increaseFontSize(back) {
    let btnMinus = back.querySelector('#minus-text');
    let btnPlus = back.querySelector('#plus-text');
    btnMinus.onclick = function () {
        if (fontSize === 12) {
            return
        } else {
            --fontSize;
            [].forEach.call(document.querySelectorAll('.back-text'), function (e) {
                e.style.fontSize = `${fontSize}px`
            });
        }


    }
    btnPlus.onclick = function () {
        if (fontSize === 32) {
            return
        }
        else {
            ++fontSize;
            [].forEach.call(document.querySelectorAll('.back-text'), function (e) {
                e.style.fontSize = `${fontSize}px`
            });
        }
    }

}




const i = document.querySelector('.i')




i.onclick = function (event) {
    const el = document.getElementById('el');
    el.scrollIntoView({behavior: "smooth"});
}

const iq = document.querySelector('.iq')




iq.onclick = function (event) {
    const el = document.getElementById('eli');
    el.scrollIntoView({behavior: "smooth"});
}
 

const foot = document.querySelector('.foot')




foot.onclick = function (event) {
    const el = document.getElementById('up');
    el.scrollIntoView({behavior: "smooth"});
}

const ia = document.querySelector('.ia')




ia.onclick = function (event) {
    const el = document.getElementById('regi');
    el.scrollIntoView({behavior: "smooth"});
}


