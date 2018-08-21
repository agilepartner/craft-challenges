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
        this.touchConfiguration = new TouchConfiguration();
    }
    
    load() {
        this.startKeyDetection(e => konami.onKeyPressed(e));
        this.startTouchDetection(e => konami.validateKey(e));
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
        console.log(key);
        var requiredKey = this.konamiCode[this.keyPosition];

        if (key == requiredKey || 
            ((requiredKey == 'a' || requiredKey == 'b') && key == 'tap')) {
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
            this.isActivated = true;

            onSuccess();

            this.resetKeyPosition();
            this.isActivated = false;
        }
    }

    startTouchDetection(onTouch){
        document.addEventListener('touchstart', function(e){
            konami.onTouchStart(e);
        }, false);
      
        document.addEventListener('touchend', function(e){
            konami.onTouchEnd(e, onTouch);
        }, false)
    }

    onTouchStart(e) {
        var touch = e.changedTouches[0];
        var touchEvent = new TouchEvent();
        touchEvent.X = touch.pageX;
        touchEvent.Y = touch.pageY;
        touchEvent.time = new Date().getTime();
        konami.lastTouchEvent = touchEvent;
    }

    onTouchEnd(e, onTouch){
        var touch = e.changedTouches[0];
        var distX = touch.pageX - konami.lastTouchEvent.X;
        var distY = touch.pageY - konami.lastTouchEvent.Y;
        var elapsedTime = new Date().getTime() - konami.lastTouchEvent.time;
        var touchGesture = 'tap';

        if (elapsedTime <= konami.touchConfiguration.allowedTime){
            if (Math.abs(distX) >= konami.touchConfiguration.threshold && 
                Math.abs(distY) <= konami.touchConfiguration.restraint){ 
                touchGesture = (distX < 0)? 'left' : 'right';
            }
            else if (Math.abs(distY) >= konami.touchConfiguration.threshold && 
                Math.abs(distX) <= konami.touchConfiguration.restraint){
                touchGesture = (distY < 0)? 'up' : 'down';
            }
        }
        onTouch(touchGesture);
    }
};

class TouchConfiguration {
    constructor(){
        this.threshold = 50;
        this.restraint = 100;
        this.allowedTime = 300;
    }
}

class TouchEvent {
    constructor(){
        this.X = 0;
        this.Y = 0;
        this.time = 0;
    }
}