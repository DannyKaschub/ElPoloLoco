let canvas;
let ctx;

let world;

function init(){
    canvas = document.getElementById('canvas');
    world = new World(canvas);

    console.log('mein charakter ist ', world.character);
}