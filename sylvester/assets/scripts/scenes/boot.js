// Boot scene
class Boot extends Phaser.Scene {
    constructor() {
        super({ key: 'boot', active: false });
    }

    init(data) {

    }

    preload() {

    }

    create() {
        
        // Starts the splash scene
        this.scene.start('splash');
    }

    update(delta, time) {

    }

    render() {

    }
}