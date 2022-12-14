let canvas;
let ctx;
let keyboard = new Keybord();

let world;

function startGame() {
    document.getElementById('startIMG').classList.add('d-none');
    document.getElementById('startbutton').classList.add('d-none');
    document.getElementById('canvas').classList.remove('d-none');
    document.getElementById('inputs').classList.add('opacity50');
    document.getElementById('lostGame').classList.add('d-none');
    init();
}

function reloadPage() {
    location.reload(true);
}

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++) window.clearInterval(i);
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
    if(e.keyCode == 77 && world.allowMusic == true){
        world.allowMusic = false;
        world.playBackgroundMusic();
    } else if (e.keyCode == 77 && world.allowMusic == false){
        world.allowMusic = true;
        world.playBackgroundMusic();
    }
});

function mobileInput() {
    document.getElementById('btnleft').addEventListener('touchstart', (e) => {
        e.preventDefault()
        keyboard.LEFT = true
    });
    
    document.getElementById('btnleft').addEventListener('touchend', (e) => {
        e.preventDefault()
        keyboard.LEFT = false
    });

    document.getElementById('btnright').addEventListener('touchstart', (e) => {
        e.preventDefault()
        keyboard.RIGHT = true
    })
    
    document.getElementById('btnright').addEventListener('touchend', (e) => {
        e.preventDefault()
        keyboard.RIGHT = false
    })

    document.getElementById('btnthrow').addEventListener('touchstart', (e) => {
        e.preventDefault()
        keyboard.D = true
    });
    
    document.getElementById('btnthrow').addEventListener('touchend', (e) => {
        e.preventDefault()
        keyboard.D = false
    });

    document.getElementById('btnjump').addEventListener('touchstart', (e) => {
        e.preventDefault()
        keyboard.SPACE = true
    });
    
    document.getElementById('btnjump').addEventListener('touchend', (e) => {
        e.preventDefault()
        keyboard.SPACE = false
    });

};