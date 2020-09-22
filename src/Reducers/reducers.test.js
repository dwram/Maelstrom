import playerReducer from './playerReducer.js';

describe('player reducer', () => {
  it('should return the initial state', () => {
    const mockCallBack = jest.fn();
    playerReducer(undefined, mockCallBack)
    expect(playerReducer(undefined, mockCallBack)).toBeTruthy();
    expect(playerReducer(undefined, {})).toEqual({});
  });
  // it('attacked reduces health', () => {
  //   const [PlayerObj, dispatch] = useReducer(playerReducer, new player())
  //   dispatch({type: 'attacked', payload: 10})
  //   playerReducer(PlayerObj, { type: "attacked", payload: 10 })
 
  //   expect((PlayerObj.hp)).toEqual(90);
  // });
});
