import React, { useContext } from "react";
import OpponentContext from '../../config/opponentContext.js'
import { banditAttack } from "../characterAnimation/bandit/bandit_attack.js";
import { banditDead } from "../characterAnimation/bandit/bandit_dead.js";
import { banditIdle } from "../characterAnimation/bandit/bandit_idle.js";

const starting_hitpoints = 125;
/* const opponent = {
  name: 'Opponent_Placeholder',
  hp: starting_hitpoints,
  MAX_HP: starting_hitpoints,
} */

class opponent {

  constructor(idleImage = banditIdle, attackImage = banditAttack, deathImage = banditDead, deathFrameNumber = 7){
    this.name = 'Opponent_Placeholder'
    this.hp = starting_hitpoints
    this.MAX_HP = starting_hitpoints
    this.is_attacking = false;
    this.money = 0
    this.idleSourceY = 0
    this.deathSourceY = 3
    this.attackSourceY = 2
    this.idleImage = idleImage
    this.attackImage = attackImage
    this.deathImage = deathImage
    this.deathFrameNumber = deathFrameNumber
    this.isDead = () => { return this.hp <= 0}
  }
}

export default opponent;
