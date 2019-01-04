// Splash scene
class Splash extends Phaser.Scene {
    constructor() {
        super({ key: 'splash', active: false });
    }

    init(data) {

    }

    preload() {

        // Loads the spritesheets
        this.load.spritesheet('sylvester', 'assets/spritesheets/people-7.png', { frameWidth: 32, frameHeight: 32 });
    }

    create() {

        // Starts the title scene
        this.scene.start('title');
    }

    update(delta, time) {
        
    }

    render() {

    }
}