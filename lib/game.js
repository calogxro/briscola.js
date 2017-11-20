const _ = require('./_')

const Deck = () => Array(40).fill(0).map((x, i) => i) // [0...39]

class Card {
  static suit(card) {
    return Math.floor(card /10) // 0...3
  }
  
  static rank(card) {
    return card %10 // 0...9
  }
}

class Briscola {
  constructor(players=[], deck=[]) {
    
    /* state */
    this.player_id = players[0]
    this.hands = {
      [players[1]]: {cards: [null, null, null], n_cards:0, score: 0, won_cards: []},
      [players[0]]: {cards: [null, null, null], n_cards:0, score: 0, won_cards: []}
    }
    this.trick = []
    this.trump = deck[0]
    this.deck = deck
    this.players = players
  }

  clone() {
    const game = new Briscola()
    const clone = _.clone(this)
    game.player_id = clone.player_id
    game.hands = clone.hands
    game.trick = clone.trick
    game.trump = clone.trump
    game.deck = clone.deck
    game.players = clone.players
    return game
  }

  start() {
    this._deal(3)
  }

  player() {
    return this.player_id
  }

  actions() {
    return this.player_id ? this.hands[this.player_id].cards.filter(card => card !== null) : []
  }

  terminal_test() {
    return 0 === this.hands[this.players[0]].n_cards + this.hands[this.players[1]].n_cards + this.trick.length
  }

  result(action, _return=true) {
    this.__playCard(this.player_id, action)

    if (this._every_player_played()) {
      this.player_id = null
    }
    else {
      this.player_id = this._next_player()
    }

    if (this._every_player_played()) {
      this._before_reset = this.clone()
      this.__resetTrick()
      this._before_reset.trick_winner = this.player_id
    }

    if (_return) {
      return this.clone()
    }
  }

  _next_player() {
    return this.player_id === this.players[0] ? this.players[1] : this.players[0]
  }

  _every_player_played() {
    return this.trick.length === this.players.length
  }

  _deal(n=1) {
    while (n-- > 0 && this.deck.length >= this.players.length) {
      let next_player = this._next_player()
      this.__dealCard(this.player_id, this.deck.pop())
      this.__dealCard(next_player, this.deck.pop())
    }
  }

  __dealCard(player_id, card) {
    let card_idx = this.hands[player_id].cards.indexOf(null)

    if (card_idx != -1) {
      this.hands[player_id].cards[card_idx] = card
      this.hands[player_id].n_cards++
    }
  }

  __playCard(player_id, card) {
    this.hands[player_id].cards = this.hands[player_id].cards.map(_card => _card === card ? null : _card )
    this.hands[player_id].n_cards--
    this.trick.push({
      card: card,
      player_id: player_id
    })
  }

  __resetTrick() {
    this.player_id = _.random(this.players)
    this.trick.length = 0
    this._deal()
  }
}

module.exports = {
  Card: Card,
  Deck: Deck,
  Briscola: Briscola
}
