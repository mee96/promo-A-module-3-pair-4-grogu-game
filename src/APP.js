'use strict';
const dice = element.querySelector(".js-dice");


dice.addeventListener = ("click"(ev) => {

    function getRandom(min, max) {
        return Math.random() * (max - min) + min
    }

    console.log(getRandom(0, dice.lenght))

}


//pruebas del dado