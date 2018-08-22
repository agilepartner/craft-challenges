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
        this.startKeyDetection(e => konami.onKeyPressed(e));
    }

    startKeyDetection(onKeyPressed) {
        document.addEventListener('keydown', function(e) {
            onKeyPressed(e);
        });
    }

    onKeyPressed(e){
        var key = this.allowedKeys[e.keyCode];
        this.validateKey(key);
    }

    validateKey(key){
        var requiredKey = this.konamiCode[this.keyPosition];

        if (key == requiredKey) {
            this.keyPosition++;

            if (this.keyPosition == this.konamiCode.length) {
                this.activateEgg(this.onSuccess);
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
            this.isActivated = true;

            onSuccess()
                .then(() => {
                    this.resetKeyPosition();
                    this.isActivated = false;
                });            
        }
    }
};