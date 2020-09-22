import player from './player.js'
import { wizardIdle } from '../characterAnimation/wizard/wizard_idle.js'

const player1 = new player()

describe("player initializes", function() {

    it("with attacking at false", function() {
        expect(player1.is_attacking).toEqual(false);
    });
    it("with current avatar as a Wizard", function() {
        expect(player1.current_avatar).toBe(wizardIdle);
    });
    it("with no money", function() {
        expect(player1.money).toEqual(0);
    });
    
});