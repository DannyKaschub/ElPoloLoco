class Keybord {
    LEFT = false;
    RIGHT = false;
    UP = false;
    DOWN = false;
    SPACE = false;
    D = false;
    m = false;


    constructor() {
        this.TouchEvents();
    }

    TouchEvents() {
        this.btnleft();
        this.rightTouch();
        this.jumpTouch();
        this.throwTouch();
    }

    btnleft() {
        document.getElementById('btnleft').addEventListener('touchstart', (e) => {
            e.preventDefault();
            LEFT = true;
        });

        document.getElementById('btnleft').addEventListener('touchend', (e) => {
            e.preventDefault();
            LEFT = false;
        });
    }

    rightTouch() {
        document.getElementById('btnright').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.RIGHT = true;
        });

        document.getElementById('btnright').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.RIGHT = false;
        });
    }

    jumpTouch() {
        document.getElementById('btnjump').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.SPACE = true;
        });

        document.getElementById('btnjump').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.SPACE = false;
        });
    }

    throwTouchButtons() {
        document.getElementById('btnthrow').addEventListener('touchstart', (e) => {
            e.preventDefault();
            keyboard.D = true;
        });

        document.getElementById('btnthrow').addEventListener('touchend', (e) => {
            e.preventDefault();
            keyboard.D = false;
        });
    }

}