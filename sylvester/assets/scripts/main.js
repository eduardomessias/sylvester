// Main scene
class Main extends Phaser.Scene {
    constructor() {
        super('main');
    }

    init(data) {

    }

    preload() {

        // Loads the scenes
        this.load.script('boot', 'assets/scripts/scenes/boot.js');
        this.load.script('splash', 'assets/scripts/scenes/splash.js');
        this.load.script('title', 'assets/scripts/scenes/title.js');
        this.load.script('options', 'assets/scripts/scenes/options.js');
        this.load.script('credits', 'assets/scripts/scenes/credits.js');
        this.load.script('demo', 'assets/scripts/scenes/playscenes/demo.js');
    }

    create() {

        // Adds the scenes
        this.scene.add('boot', Boot);
        this.scene.add('splash', Splash);
        this.scene.add('title', Title);
        this.scene.add('options', Options);
        this.scene.add('credits', Credits);
        this.scene.add('demo', Demo);

        // Starts the boot scene
        this.scene.start('boot');
    }

    update(delta, time) {

    }

    render() {

    }
}

// Game global declaration
let game;

// The game starts
window.onload = function() {

    // Phaser game configurations
    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 500,
        scene: [
            Main
        ]
    }

    // Game assignment
    game = new Phaser.Game(config);
    game.scene.start('main');

    // Sets window focus
    window.focus();
}

// The game canvas is adjusted to the window
window.onresize = function() {
    
    // Canvas selection
    let canvas = document.querySelector("canvas");

    // Calc window and game ratios.
    var windowRatio = window.innerWidth / window.innerHeight;
    var gameRatio = game.config.width / game.config.height;

    // Compare the ratio bewteen the window and the game canvas
    if(windowRatio < gameRatio){

        // Adjust the canvas size
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = (window.innerWidth / gameRatio) + "px";

    }
    else{

        // Adjust the canvas size
        canvas.style.width = (window.innerHeight * gameRatio) + "px";
        canvas.style.height = window.innerHeight + "px";

    }
}

