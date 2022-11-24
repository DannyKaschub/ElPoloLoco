class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -0;
    statusBar = new Statusbar();
    coinbar = new coinbar();
    coinAmount = 0;
    bottlebar = new bottlebar();
    bottleAmount = 0;
    Endbossbar = new Endbossbar();
    throwableObjects = [];
    //soundfiles
    item_sound = new Audio('audio/item.mp3')
    win_sound = new Audio('audio/win.mp3')
    lose_sound = new Audio('audio/lose.mp3')
    chicken_sound = new Audio('audio/chicken.mp3')
    bottle_break_sound = new Audio('audio/bottle_breaking.mp3')


    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects(); 
            this.checkGameend();
        }, 100);
    }

    checkGameend(){
        if (this.character.enemy == 0) {
            document.getElementById('lostGame').classList.remove('d-none');
            this.lose_sound.play();
        }
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            if (!this.bottleAmount == 0) {
                let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
                this.throwableObjects.push(bottle);
                this.bottleAmount--
                this.bottlebar.setPercentage(this.bottleAmount * 20)
            }
        }
    }

    checkCollisions() {
        this.CharacterRunsEnemy()
        this.CharacterJumpEnemy()
        this.CharacterCollectBottle()
        this.CharacterCollectCoin()
        this.BottleHitEndboss()
    }

    CharacterRunsEnemy() {
        // enemy hit character
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !this.character.isAboveGround() && !enemy.is_dead) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
        });
    }

    CharacterJumpEnemy() {
        //kill enemy by jump
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && enemy instanceof Chicken && !enemy.is_dead) {
                enemy.is_dead = true;
                this.chicken_sound.play()
            }
            if (this.character.isColliding(enemy) && this.character.isAboveGround() && enemy instanceof smallChicken && !enemy.is_dead) {
                enemy.is_dead = true;
                this.chicken_sound.play()
            }
        });
    }

    CharacterCollectBottle() {
        //Check bottle Colliding Character
        this.level.bottles.forEach(bottle => {
            if (this.character.isColliding(bottle) && (bottle.height != 0 && bottle.width != 0)) {
                bottle.height = 0;
                bottle.width = 0;
                this.bottleAmount++
                this.bottlebar.setPercentage(this.bottleAmount * 20)
                this.item_sound.play()   
            }
        });
    }
    CharacterCollectCoin() {
        //Check Coin collision Character
        this.level.coins.forEach(coin => {
            if (this.character.isColliding(coin) && (coin.height != 0 && coin.width != 0)) {
                coin.height = 0;
                coin.width = 0;
                this.coinAmount++
                this.coinbar.setPercentage(this.coinAmount * 20)
                this.item_sound.play()   
            }
        });

    }

    BottleHitEndboss() {
        this.level.enemies.forEach((enemy) => {
            this.throwableObjects.forEach((bottle) => {
                if (bottle.isColliding(enemy) && enemy instanceof Endboss){
                    enemy.hit();
                    this.Endbossbar.setPercentage(enemy.energy);
                }
            })
        })
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundobjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.coinbar);
        this.addToMap(this.bottlebar);
        this.addToMap(this.Endbossbar);
        this.addObjectsToMap(this.throwableObjects);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}