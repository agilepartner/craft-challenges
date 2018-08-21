class Konami {

    constructor(onSuccess){
        this.onSuccess = onSuccess;
        this.konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
        this.allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            65: 'a',
            66: 'b'
        };
        this.keyPosition = 0;
        this.isActivated = false;
        this.konami = this;
    }
    
    load() {
        document.addEventListener('keydown', function(e) {
            konami.onKeyPressed(e);
        });
    }

    onKeyPressed(e){
        var key = this.allowedKeys[e.keyCode];
        var requiredKey = this.konamiCode[this.keyPosition];

        if (key == requiredKey) {
            this.keyPosition++;

            if (this.keyPosition == this.konamiCode.length) {
                this.activateEgg(this.onSuccess);
                this.resetKeyPosition();
            }
        } else {
            this.resetKeyPosition();
        }
    }

    resetKeyPosition() {
        this.keyPosition = 0;
    }

    activateEgg(onSuccess) {
        if(!this.isActivated) {
            this.activated = true;
            
            onSuccess();

            this.resetKeyPosition();
            this.activated = false;
        }
    }
};