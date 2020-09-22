import React, { useContext, useEffect, useState } from 'react'
import PlayerContext from '../../config/playerContext.js'
import OpponentContext from '../../config/opponentContext.js'
import { Player } from '../../Components/player/player.js'
import opponent,{ Opponent } from '../../Components/opponent/opponent.js'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FightRoundsContext from '../../config/fightRoundsContext.js'

export default function Fight() {

    const { PlayerObj, dispatch }  = useContext(PlayerContext)
    const { OpponentObj, dispatchOpp } = useContext(OpponentContext);
    const { FightRounds, dispatchFight } = useContext(FightRoundsContext)

    const handleAttack = () => {
      if(PlayerObj.hp < 0) { 
        return 
      } else {
        dispatchFight({type: 'next_round', payload: 1})
        dispatch({type: 'set_attack', payload: true});
        dispatchOpp({type: 'attacked', payload: Math.floor(Math.random()*20)});
      }
    }

    function anyPlayerAttacking() {
      return (PlayerObj.is_attacking === true || OpponentObj.is_attacking === true) 
    }

    function bothAlive() {
      return OpponentObj.hp > 0 && PlayerObj.hp > 0
    }

    function anyDead() {
      return PlayerObj.hp <= 0 || OpponentObj.hp <= 0
    }

    function handleNewFight(){
      dispatch({type: 'set_attack', payload: false});
      dispatchOpp({type: 'set_attack', payload: false});
      dispatch({type: 'reset', payload: {...PlayerObj, hp: PlayerObj.MAX_HP}})
      dispatchOpp({type: 'reset', payload: new opponent()})
    }

    return (
    <div>
      { bothAlive() ? 
        (anyDead() ? 
          <div>Attack disappears</div> : 
          <div><button data-testid = 'attack_button' style={{visibility: anyPlayerAttacking() && bothAlive() ? 'hidden' : 'visible' }} onClick={() =>handleAttack()}>Attack</button></div>) : //MAIN FALSE
      (PlayerObj.hp <= 0 ? <div><h1 data-testid="lose-message">YOU LOSE</h1><div><button onClick={handleNewFight}><Router><Route><Link to='/play'>Go back</Link></Route></Router></button></div> </div> : 
        <div><h1 data-testid="win-message">YOU WIN</h1> <div><button onClick={handleNewFight}><Router><Route><Link to='/play'>Go back</Link></Route></Router></button></div></div>)}

    </div>
    )
}