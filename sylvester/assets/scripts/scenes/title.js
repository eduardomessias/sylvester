// Title scene
class Title extends Phaser.Scene {
    constructor() {
        super({ key: 'title', active: false });
    }

    init(data) {

    }

    preload() {

    }

    create() {
        // Access the game config to read the width and height
        const { width, height } = this.sys.game.config;

        // Creates the title text
        this.titleText = this.add.text (width / 2, height / 2, 'Sylvester\nThe science project', {
            fontSize: '68px',
            fontFamily: 'monospace',
            color: 'white'
        });
        this.titleText.setOrigin(0.5, 0.5);
        this.titleText.setShadow(5, 5, '#30336b', 0, true, true);

        // Creates the play text
        this.playText = this.add.text(this.titleText.x, this.titleText.y + 100, 'Play', {
            fontSize: '48px',
            fontFamily: 'monospace',
            color: '#f0932b'
        });
        this.playText.setOrigin(0.5, 0.5);
        this.playText.setShadow(5, 5, 'white', 0, true, true);

        // Sets the play text interactive, so player can click on it
        this.playText.setInteractive();

        // On mouse over the play text, the colocr should be white
        this.playText.on('pointerover', () => {
            this.playText.setStyle({
                color: 'white'
            });
        });

        // On mouse out the play text, the color should com back to standart color
        this.playText.on('pointerout', () => {
            this.playText.setStyle({
                color: '#f0932b'
            });
        });

        // On click play text
        this.playText.on('pointerup', () => {
            // Starts the demo scene
            this.scene.start('demo');
        });
        
        
    }

    update(delta, time) {

    }

    render() {

    }
}