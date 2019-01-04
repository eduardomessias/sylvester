// Demo scene
class Demo extends Phaser.Scene {
    constructor() {
        super({ key: 'demo', active: false });
    }

    init(data) {

    }

    preload() {

    }

    create() {
        
        // Adds Sylvester to the game
        this.sylvester = this.add.sprite(32, 32, 'sylvester', 43);

        // Create animations
        this.anims.create({ key: 'sylvester-walkdown', frames: this.anims.generateFrameNumbers('sylvester', { frames: [6, 8] }) });
        this.anims.create({ key: 'sylvester-walkup', frames: this.anims.generateFrameNumbers('sylvester', { frames: [42, 44] }) });
        this.anims.create({ key: 'sylvester-walkleft', frames: this.anims.generateFrameNumbers('sylvester', { frames: [18, 20] }) });
        this.anims.create({ key: 'sylvester-walkright', frames: this.anims.generateFrameNumbers('sylvester', { frames: [30, 32] }) });

        // Create keyboard cursors
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update(delta, time) {
        if(this.cursors.down.isDown) {
            // Sylvester looks down
            this.sylvester.anims.play('sylvester-walkdown', true);
        }
        else if(this.cursors.up.isDown) {
            // Sylvester looks up
            this.sylvester.anims.play('sylvester-walkup', true);
        }
        else if(this.cursors.left.isDown) {
            // Sylvester looks left
            this.sylvester.anims.play('sylvester-walkleft', true);
        }
        else if(this.cursors.right.isDown) {
            // Sylvester looks right
            this.sylvester.anims.play('sylvester-walkright', true);
        }
        else {
            //Stops sylvester animations
            this.sylvester.anims.stop();
            
            // Sylvester looking down
            this.sylvester.setFrame(43);
        }
    }

    render() {

    }
}