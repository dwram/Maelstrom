import React,{ useContext } from 'react'
import PlayerContext from '../../config/playerContext.js'
import { wizardAttack } from '../characterAnimation/wizard/wizard_attack.js';
import { wizardDead } from '../characterAnimation/wizard/wizard_dead.js';
import { wizardIdle } from '../characterAnimation/wizard/wizard_idle.js'

const STARTING_HITPOINTS = 100;
const STARTING_GOLD = 0;

class Player {

  constructor(idleImage = wizardIdle, attackImage = wizardAttack, deathImage = wizardDead, deathFrameNumber = 7) {
    this.name = 'placeholder'
    this.hp = STARTING_HITPOINTS
    this.MAX_HP = STARTING_HITPOINTS
    this.is_attacking = false
    this.current_avatar = wizardIdle
    this.money = STARTING_GOLD;
    this.idleSourceY = 0
    this.deathSourceY = 0
    this.attackSourceY = 0
    this.idleImage = idleImage
    this.attackImage = attackImage
    this.deathImage = deathImage
    this.deathFrameNumber = deathFrameNumber
    this.isDead = () => { return this.hp <= 0}

  }
}

export default Player;

