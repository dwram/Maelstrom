
export default function playerReducer(state, action) {
    switch(action.type) {
      case "attack":
          //console.log((((state.hp - action.payload)/state.MAX_HP)*100)+ '%')          
        return { ...state, hp: state.hp - action.payload}
      case "rename":
        return {...state, name: action.payload}
      case "attackAnimation": 
        console.log({ ...state, is_attacking: action.payload});
        return { ...state, is_attacking: action.payload}
      default: 
        return {...state};
    }
  }