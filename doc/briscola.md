**Briscola**

one of Italy's most popular games, is a Mediterranean [trick-taking][Trick-taking game] [card game][Card game] for two to six players played with a standard [Italian 40-card deck][Italian suits]. 

![A set of "Neapolitan" cards by Modiano.][img-deck]


__*Contents*__ 

[TOC]


## The cards 

A deck of Italian cards consists of forty cards, divided into four [`suits`][Suit]: 

  - `coins` / `suns` 
  - `swords`
  - `cups` 
  - `clubs` / `bats`

The **values** on the cards range numerically from 1 through 7, plus three `face cards` in each suit: 

  - Knave [^note-knave]
  - Knight [^note-knight]
  - King [^note-king]

To determine the face value of any numeric card, simply count the number of suit icons on the card. [^note-ace]

Below is a table identifying card rank and point values. Unlisted cards have no point value, and are ranked in descending ordinal value, from seven to two. Note however the odd ranking of the _three_.

| Card (by rank) | Point value |
| -------------- | ----------- |
| Ace            |          11 |
| Three          |          10 |
| King           |           4 |
| Knight         |           3 |
| Knave          |           2 |

In total, a deck has 120 points. To win a game, a player must accumulate more points than any other player. If two players (teams) have same number of points (60) another game is played to determine the winner.


## Game play

After the deck is shuffled, each player is dealt three cards. The next card is placed face up on the playing surface, and the remaining deck is placed face down, sometimes covering half of the up-turned card. This card is the _Briscola_, and represents the [trump][Trump] suit for the game. [^note-gameplay-1]

The deal, and game play itself, proceeds counter-clockwise.

The player to the right of the dealer leads the first hand (or trick) by playing one card face up on the playing surface. Each player subsequently plays a card in turn, until all players have played one card. The winner of that hand is determined as follows:

  - if any briscola (trump) has been played, the player who played the highest valued trump wins
  - if no briscole (trumps) have been played, the player who played the highest card of the lead suit wins

Unlike other trump card games, players are not required to _follow suit_, that is, to play the same suit as the lead player.

Once the winner of a trick is determined, that player collects the played cards, and places them face down in a pile. Each player maintains his/her own pile, though the four- and six-player versions may have one player collecting all tricks won by his partners. Then, each player draws a card from the remaining deck, starting with the player who won the trick, proceeding counter-clockwise. Note that the last card collected in the game should be the up-turned Briscola. The player who won the trick leads the next hand. [^note-gameplay-2]

After all cards have been played, players calculate the total point value of cards in their own piles. For multi-player games, partners combine their points.


### Flow chart

	begin:  
		
		 1. the deck is shuffled
		 2. each player is dealt three cards
		 3. the Briscola is placed face up
		 4. the player to the right of the dealer leads the first hand (or trick) 
			by playing one card face up on the playing surface
		
	loop:

		 5. Each player subsequently plays a card in turn, 
			until all players have played one card. 

		 6. The winner of that hand is determined as follows:

			if any briscola (trump) has been played, 
				the player who played the highest valued trump wins

			else if no briscole (trumps) have been played, 
				the player who played the highest card of the lead suit wins

		 7. Once the winner of a trick is determined, 
			that player collects the played cards, and places them face down in a pile.
		 8. Then, each player draws a card from the remaining deck, 
			starting with the player who won the trick, proceeding counter-clockwise. 
		 9. The player who won the trick leads the next hand

		10. if not (all cards have been played) 
				goto loop

	end:

		11. players calculate the total point value of cards in their own piles



```flow
start=>start
end=>end

init=>subroutine: 	init

loop=>subroutine: 	loop


5=>inputoutput: 	wait for the next
					player's card
5'=>condition: 	    all players 
					have played 
6=>operation: 		winner := trick.winner()
7=>operation: 		empty the table

cond=>condition: 	deck.isEmpty()

8=>operation: 		deal one card everyone


11=>operation: 		winner := the player 
					with more points


start->init->loop->5->5'->5

5'(no)->5
5'(yes)->6->7(right)->cond->8->loop

cond(no)->8(right)->loop
cond(yes)->11->end
```





[^note-knave]: A Knave is a lone human figure standing. 
[^note-knight]: The Knight is a human figure riding a horse. 
[^note-king]: The King is a human figure wearing a crown.
[^note-ace]: The ace card of coins is usually a type of bird with circle in the middle.

[^note-gameplay-1]: Before the game begins if a player has the deuce of trump he/she may retire the "briscola". This move may only be done at the beginning of the game or first hand.[citation needed] 
Before the first hand is played (in four player game), team players may show each other their cards.

[^note-gameplay-2]: During game play and only before the next to the last hand is played, a player who draws the card with the seven (7) of trump can take the "briscola".[citation needed] This may be done only if the player has won a hand. 
Before the last hand, people in the same team can look at each other's cards.


## External links

###### from Wikipedia:
  
  - [Briscola][Briscola]
  - [Trick-taking game][Trick-taking game]
  - [Card game][Card game]
  - [Italian suits][Italian suits]
  - [Suit][Suit]
  - [Trump][Trump]


[Briscola]: https://en.wikipedia.org/wiki/Briscola
[Trick-taking game]: https://en.wikipedia.org/wiki/Trick-taking_game
[Card game]: https://en.wikipedia.org/wiki/Card_game
[Italian suits]: https://en.wikipedia.org/wiki/Playing_card#Italian_suits
[Suit]: <https://en.wikipedia.org/wiki/Suit_(cards)>
[Trump]: https://en.wikipedia.org/wiki/Trump


[img-deck]: https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Scopa.jpg/320px-Scopa.jpg


## See also

  - [Flow chart language (FCL)](https://en.wikipedia.org/wiki/Flow_chart_language)
  - [http://flowchart.js.org/](http://flowchart.js.org/)
  - [Fisher–Yates Shuffle (article by Mike Bostock)](https://bost.ocks.org/mike/shuffle/)
  