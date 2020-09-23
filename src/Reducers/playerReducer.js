
export default function playerReducer(state, action) {
    switch(action.type) {
      case "attacked":     
        return { ...state, hp: state.hp - action.payload}
      case "set_attack": 
        return { ...state, is_attacking: action.payload}
      case "unset_attack": 
        return { ...state, is_attacking: action.payload} 
      case "reset":
        return { ...state, hp: state.MAX_HP}
      case "MONEY_ADDED":
        return { ...state, money: state.money + action.payload} 
      case "MONEY_DEDUCTED":
        return {...state, money: Math.floor(state.money - action.payload.deduction), escapes: state.escapes + action.payload.escapes} 
      case "PLAYER_RENAMED":
        return {...state, name: action.payload}
      default: 
        return {...state};
    }
  }