import React from 'react'

import _ from '../lib/_'
import _game from '../lib/game'

const cardUrl = (card) => `./img/cards/${_game.Card.suit(card)}/${_game.Card.rank(card)}`

function Card(props) {
  return (
    <img id={props.id} className={`card ${props.className}`} src={cardUrl(props.card)} onClick={props.onClick}/>
  ) 
}

function Player(props) {
  let pos = props.pos
  let cards = props.hand.cards.map((card, idx) => {
    if (card === null) {
      return null
    }
    else {
      return (
        <Card className={`card-slot-player-${pos}-${idx}`} card={card} key={card} onClick={event => {
          props.command(card)
        }}/>
      )
    }
  })

  return (
    <div id={`p${pos}`} className={`player ${props.className}`}>
      <div className='sit'></div>
      <div className='player_cards'>
        {cards}
      </div>
    </div>
  )
}

function Trick(props) {
  let p0_op = props.trick.find(op => op.player_id === 'MAX')
  let p1_op = props.trick.find(op => op.player_id === 'MIN')

  let winning = ''
  if (props.trick.length === 2) {
    winning = props.trick_winner === 'MAX' ? 'card-slot-player-0-got' : 'card-slot-player-1-got'
  }

  let p0_card = p0_op ? <Card id='p0_card' card={p0_op.card} key={p0_op.card} className={winning} /> : null
  let p1_card = p1_op ? <Card id='p1_card' card={p1_op.card} key={p1_op.card} className={winning} /> : null

  return (
    <div id='card_slot'>
      {p0_card}
      {p1_card}
    </div>
  )
}

function Table(props) {
  let player_id = props.player_id
  let state = props.state

  let empty_slot = state.deck.length === 0 ? ' empty_slot' : '';

  return (
    <div className='table table-red'>
      <Player pos={1} hand={state.hands['MIN']} className={state.player_id==='MIN'?'picker':''} command={_.noop} />
      <Trick  trick={state.trick} trick_winner={state.trick_winner} />
      <img id='trump' className={'card' + empty_slot} src={cardUrl(state.trump)} />
      <img id='deck' className={'card card-slot-hand' + empty_slot} src="./img/cards/back" />
      <Player pos={0} hand={state.hands['MAX']} className={state.player_id==='MAX'?'picker':''} command={_.noop}/>
    </div>
  )
}

export { Table }
