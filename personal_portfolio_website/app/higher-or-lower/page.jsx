'use client';

import './higherOrLower.css';
import { useEffect, useState } from 'react'
import TwoCards from './components/TwoCards';

const cardValues = [
  // name on card : value of card
  { 'src': '/cardImgs/A.png', 'name': 'Ace', 'value': 1 },
  { 'src': '/cardImgs/2.png', 'name': '2', 'value': 2 },
  { 'src': '/cardImgs/3.png', 'name': '3', 'value': 3 },
  { 'src': '/cardImgs/4.png', 'name': '4', 'value': 4 },
  { 'src': '/cardImgs/5.png', 'name': '5', 'value': 5 },
  { 'src': '/cardImgs/6.png', 'name': '6', 'value': 6 },
  { 'src': '/cardImgs/7.png', 'name': '7', 'value': 7 },
  { 'src': '/cardImgs/8.png', 'name': '8', 'value': 8 },
  { 'src': '/cardImgs/9.png', 'name': '9', 'value': 9 },
  { 'src': '/cardImgs/10.png', 'name': '10', 'value': 10 },
  { 'src': '/cardImgs/Jack.png', 'name': 'Jack', 'value': 11 },
  { 'src': '/cardImgs/Queen.png', 'name': 'Queen', 'value': 12 },
  { 'src': '/cardImgs/King.png', 'name': 'King', 'value': 13 },
];

export default function HigherorLower() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState({});
  const [flipped, setFlipped] = useState(false);
  const [firstCardFlipped, setFirstFlip] = useState(false)
  const [answer, setAnswer] = useState(null);
  const [disabled, setDisabled] = useState(false);

  // picks two cards out of the "deck"
  const pickCards = () => {
    function getTwoNums() {
      let numOne = Math.floor((Math.random() * 13))
      let numTwo = Math.floor((Math.random() * 13))

      if (numOne === numTwo) {
        return getTwoNums();
      }
      return [numOne, numTwo]
    }
    let twoNums = getTwoNums();
    // console.log(twoNums)
    const cards = [];
    cards.push(cardValues[twoNums[0]]);
    cards.push(cardValues[twoNums[1]]);

    setFirstFlip(false)
    setCards(cards);
    findAnswer(cards);
    setDisabled(false)
  };

  // figure out the answer and set it to the answer state
  const findAnswer = (cards) => {
    // console.log(cards)
    if (cards[0].value > cards[1].value) {
      setAnswer("lower")
    } else {
      setAnswer("higher")
    }
  }

  const handleHigherButton = () => {
    setDisabled(true)
    setFlipped(true);
    if (answer === 'higher') {
      let newScore = { ...score }
      newScore.wins++
      setScore(newScore);
    } else {
      let newScore = { ...score }
      newScore.losses++
      setScore(newScore);
    }
    setTimeout(() => {
      setFlipped(false);
    }, 2000)
    setTimeout(()=> {
      setFirstFlip(true)
    }, 2500)
    setTimeout(() => {
      pickCards();
    }, 3000)
  }

  const handleLowerButton = () => {
    setDisabled(true)
    setFlipped(true)
    if (answer === 'lower') {
      let newScore = { ...score }
      newScore.wins++
      setScore(newScore);
    } else {
      let newScore = { ...score }
      newScore.losses++
      setScore(newScore);
    }
    setTimeout(() => {
      setFlipped(false);
    }, 2000)
    setTimeout(()=> {
      setFirstFlip(true)
    }, 2500)
    setTimeout(() => {
      setFirstFlip(true)
      pickCards();
    }, 3000)
  }

  const newGame = () => {
    pickCards();
    setScore({ 'wins': 0, 'losses': 0 });
  }

  // start game immediately
  useEffect(() => {
    pickCards();
    setScore({ 'wins': 0, 'losses': 0 });
  }, [])

  // console.log(answer)

  return (
    <div className='offWhite-Primary higherOrLowerApp'>
      <div className='appArea'>
        <p className='title'>Higher or Lower?</p>
        <p className='textInstructions'>Is the hidden card higher or lower than the current card? Aces count as lower than 2.</p>

        <div className='higherOrLowerButtons'>
          <button disabled={disabled} onClick={handleHigherButton}>Higher</button>
          <button disabled={disabled} onClick={handleLowerButton}>Lower</button>
        </div>

        <div>
          {cards.length >= 1 && <TwoCards cards={cards} flipped={flipped} firstCardFlipped={firstCardFlipped} />}
        </div>

        {/* score */}
        <div>
          <p>Wins: {score.wins} </p>
          <p>Losses: {score.losses}</p>
        </div>
        <button onClick={newGame}>New Game</button>
      </div>

      <p className='githubLinkText'>See the original project on&nbsp;<a href='https://github.com/kawaiimusician/higher-or-lower' target='_blank' className='githubLink'>Github</a>!</p>
      <p className='updateInfo'>Project updates (4/2024) are only cosmetic. All functionality remains the same as the original</p>
    </div>
  );
}
