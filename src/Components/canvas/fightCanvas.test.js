import React from "react";
import ReactDOM from "react-dom";
import FightCanvas from './FightCanvas.js'
import OpponentContext from '../../config/opponentContext.js'
import PlayerContext from '../../config/playerContext'
import { render, cleanup, fireEvent } from "@testing-library/react";


const OpponentObj  = { name: "Mouldie Harry", hp: 1 };
const PlayerObj = { name: "Righteous Ilja", hp: 10000, is_attacking: false, current_avatar_text: jest.fn() };
const fightCanvasRender = (
  <PlayerContext.Provider value={{PlayerObj}}>
      <OpponentContext.Provider value={{OpponentObj}}>
          <FightCanvas />,
      </OpponentContext.Provider>
  </PlayerContext.Provider>
  )

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render( fightCanvasRender, container);
});

afterEach(cleanup);

test("fight ending after hp is less than 0", () =>{
    const { queryByTestId } = render(<> fightCanvasRender </>);
    expect(queryByTestId("healthbars")).toBeTruthy();
    ;
});