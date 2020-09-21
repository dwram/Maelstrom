export class Character {
    constructor(actionArg, imageSrc, characterWidth, characterHeight, startPosX, startPosY, offsetX, imageForward, imageReverse, imageRun, imageRunback, imageAttack, imageDie, imageIdle) {
        this.imageSrc = imageSrc
        this.imageForward = imageForward
        this.imageReverse = imageReverse
        this.imageRun = imageRun || imageForward;
        this.imageRunback = imageRunback || imageReverse;
        this.imageAttack = imageAttack || imageForward;
        this.imageIdle = imageIdle || imageForward;
        this.imageDie = imageDie || imageReverse;
        this.width = characterWidth;
        this.height = characterHeight;
        this.frameX = 0;
        this.x = startPosX; // starting point (on the canvas)
        this.y = startPosY; // starting point (on the canvas)
        this.speed = 4;
        this.runStartCoord = this.x + offsetX;
        this.runDistanceLeft = 50; //  SMALLER THE GREATER DISTANCE RUN LEFT!
        this.runDistanceRight = 1500;
        this.testOffset = this.runStartCoord; // distance to travel
        this.endFrame = 7;
        this.action = actionArg;
        this.deathFrame = 7;
        this.animating = true;
        this.isDead = function() {
            return this.hp <= 0
        }

        this.isAlive = function() {
            return this.hp > 0
        }
    
        this.toggleAttack = function () {
            return this.is_attacking = !this.is_attacking
        }
    
        this.getFrameYValues = function () {
            switch(this.action){
                case 'attack':
                    this.frameLimit = 7;
                    return this.frameY = 2;
                case 'run':
                    return this.frameY = 1;
                case 'run_back':
                    return this.frameY = 1;  
                case 'die':
                    return this.frameY = 4;
                case 'idle':
                    return this.frameY = 0;
                default:
                    return this.frameY = 0;   
            }
        }
        this.getFrameYValues()

        this.draw = function (animation, ctx) {
            if (animation) {
                window.cancelAnimationFrame(animation)
            }
            // const [posX, posY] = [200, 100] // Controls the location of the sprite on canvas

            ctx.drawImage(this.imageSrc, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.testOffset, this.y, this.width, this.height);

            // [this.endFrame, this.speed] = (this.action === 'idle') ? [3, 5] : [7, 20]   // parallel deconstruction + ternary to conditionally determine speed.
            this.endFrame = (this.action === 'idle') ? 3 : 7; // ternary  to determine where the frame ends
            this.endFrame = (this.action === 'die') ? this.deathFrame : this.endFrame
            if (this.frameX < this.endFrame)
                this.frameX++;
            else if (this.action === 'die' && this.frameX >= this.endFrame) {
                return;
            }
            else this.frameX = 0;
        }

        this.setAction = function (action) {
            //this.frameX = 0
            this.action = action
        }
        // difference between offset and the rundistance is the actual distance. Once express condition is met, execute the next sequence. e.g. run -> attack, attack -> run_back
        this.update = function() {
            switch(this.action){
                case 'run':
                    this.frameY = 1;
                    this.imageSrc.src = this.imageForward

                    if (this.testOffset > this.runDistanceLeft)
                        this.testOffset -= this.speed;
                    else 
                        this.testOffset = this.runStartCoord;

                    if (this.testOffset <= this.runDistanceLeft) { 
                        this.action = 'attack';
                        this.frameX = 0;
                    }
                    break;
                case 'attack':
                    this.frameY = 2;
                    this.imageSrc.src  = this.imageAttack;
                    if(this.frameX === 7) this.action = 'run_back';
                    break; 
                case 'run_back':
                    this.frameY = 1;
                    this.imageSrc.src = this.imageRunback;
                    if (this.testOffset < this.runStartCoord) this.testOffset += this.speed; else
                    this.testOffset = this.runStartCoord;
                    if (this.testOffset >= this.runStartCoord) this.action = 'idle';
                    break;
                case 'idle':
                    this.imageSrc.src = this.imageIdle;
                    this.frameY = 0; 
                    break;
                case 'die':
                    this.imageSrc.src = this.imageDie;
                    this.endFrame = 3;
                    this.frameY = 3;
                    break;  
                default:
                    this.imageSrc.src = this.imageIdle;
                    this.action = 'idle';
                    break;    
            }
        }
    }
}








