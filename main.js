/*  AUTHOR: Nicolas Sims
 *  VERSION: 2.4.7
 *  CREATED: 1/9/2017
 *  PURPOSE: Create a dice roller
 */

'use strict';

class main {
    constructor() {
        setColor.setDivColor();
        changeColor.changeDivColor();
    }
}

class setColor {
    static setDivColor() {
        document.getElementById("button").style.backgroundColor = "blue";
    }
}

class changeColor {
    static changeDivColor() {
        document.getElementById("button").addEventListener("click", () => {
            document.getElementById("button").style.backgroundColor = "red";
        }, false);
    }
}

window.onload = function() {
    new main();
};