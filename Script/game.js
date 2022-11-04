let canvas;
let ctx;
let keyboard = new Keybord();

let world;

function startGame() {
    document.getElementById('startIMG').classList.add('d-none');
    document.getElementById('startbutton').classList.add('d-none');
    document.getElementById('inputs').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    init();
}

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);

    console.log('mein charakter ist ', world.character);
}

window.addEventListener("keydown", (e) => {
    if(e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38) {
        keyboard.UP = true;
    }
    if(e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if(e.keyCode == 68) {
        keyboard.D = true;
    }
});


window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
    keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});