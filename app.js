import React from 'react'
import ReactDOM from 'react-dom'

import _ from './lib/_'
import { Briscola, Deck } from './lib/game'
import { Table } from './jsx/Table.jsx'

const $app = document.getElementById('main')

window.addEventListener("load", function(event) {
  main()
});

function main() {
  const player_id = 'MAX'
  const game = new Briscola(['MAX', 'MIN'], Deck())
  
  let ms = 0

  game.start()
  render(_.clone(game), null, ms)

  while ( ! game.terminal_test()) {
    game.result(_.random(game.actions()), false)
    ms += 1000
    render(_.clone(game), null, ms)

    game.result(_.random(game.actions()), false)
    ms += 1000
    render(_.clone(game)._before_reset, null, ms)

    ms += 1000
    render(_.clone(game), null, ms) 
  }
  
  function render(state, command, ms) {
    setTimeout(() => {
      ReactDOM.render(React.createElement(Table, {
        player_id: player_id,
        state: state,
        command: null
      }), $app)
    }, ms)
  }
}
