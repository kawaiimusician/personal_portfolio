"use client";
import './color-guesser.css';
import { useState, useEffect } from 'react';

export default function App() {
  const numberOfTurns = 10;
  const [rgb, setRgb] = useState({});
  const [answer, setAnswer] = useState([]);
  const [score, setScore] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [showScore, setShowScore] = useState("hidden")

  // rgb picker function - picks 3 random numbers between 0 and 255. stores in state. (does it 4 times.)
  // random pick between 0 and 3 to determine the RGB code that will be the answer, store in answer state
  const getRGB = () => {
    const pickColor = () => {
      let red = Math.floor((Math.random() * 256));
      let green = Math.floor((Math.random() * 256));
      let blue = Math.floor((Math.random() * 256));
      return `rgb(${red}, ${green}, ${blue})`
    };

    let rgbValues = [pickColor(), pickColor(), pickColor(), pickColor()];

    setRgb(rgbValues);
  };

  // function to pick one of the 4 generated RGB codes to be the right answer
  const pickAnswer = () => {
    let answerIndex = Math.floor((Math.random() * 4));
    setAnswer(answerIndex);
  };

  // set all squares to gray, then replace the answer square with correct RGB for displaying the correct 
  const grayOut = () => {
    let gray = ['rgb(140, 140, 140)', 'rgb(140, 140, 140)', 'rgb(140, 140, 140)', 'rgb(140, 140, 140)'];
    gray[answer] = rgb[answer];
    setRgb(gray);
  }

  // function to handle clicking what the user thinks is the correct answer. The true answer is then revealed and score is reacorded. Once you reach the turn limit, the score is revealed and new game button is displayed.
  const handleClick = (rgbBoxCode) => {
    if (disabled == false) {
      setDisabled(true)
      if (rgbBoxCode == rgb[answer]) {
        let newScore = { ...score };
        newScore.wins++;
        setScore(newScore);
        grayOut();

        console.log(score.wins + score.losses == numberOfTurns-1);
        if (score.wins + score.losses == numberOfTurns-1) {
          setShowScore('block justifyCenter')
          console.log("End")
        } else {
          setTimeout(() => {
            getRGB();
            pickAnswer();
            setDisabled(false);
          }, 2000)
        }

      } else {
        let newScore = { ...score };
        newScore.losses++;
        setScore(newScore);
        grayOut();

        console.log(score.wins + score.losses == numberOfTurns-1);
        if (score.wins + score.losses == numberOfTurns-1) {
          setShowScore('block justifyCenter')
          console.log("End")
        } else {
          setTimeout(() => {
            getRGB();
            pickAnswer();
            setDisabled(false);
          }, 2000)
        }
      }
    }
  }

  // reset score, hide score, get new RGB colors
  const playAgain = () => {
    setShowScore("hidden");
    setDisabled(false);
    getRGB();
    pickAnswer();
    setScore({ 'wins': 0, 'losses': 0 });
  }

  // set initial RGBs
  useEffect(() => {
    getRGB();
    pickAnswer();
    setScore({ 'wins': 0, 'losses': 0 });
  }, [])


  return (
    <div className="offWhite-Primary pageSpacing">
      <div className='appArea bg-white w-fit'>
        <p className='title'>Guess the Color</p>
        <p className='textInstructions'>Click which color you think corresponds with the following RGB code:</p>

        {/* RGB code displayed here */}
        <p className='font-bold'> {rgb[answer]} </p>

        {/* 4 color choices displayed in a 2x2 grid */}
        <div className='justifyCenter'>
          <div className='box' style={{ backgroundColor: `${rgb[0]}` }} onClick={() => { { handleClick(`${rgb[0]}`) } }}></div>
          <div className='box' style={{ backgroundColor: `${rgb[1]}` }} onClick={() => { handleClick(`${rgb[1]}`) }}></div>
        </div>
        <div className='justifyCenter'>
          <div className='box' style={{ backgroundColor: `${rgb[2]}` }} onClick={() => { handleClick(`${rgb[2]}`) }}></div>
          <div className='box' style={{ backgroundColor: `${rgb[3]}` }} onClick={() => { handleClick(`${rgb[3]}`) }}></div>
        </div>
        {/* after selecting the answer the right one will stay but the other will become translucent */}

        {/* win/loss counter (not visible) */}
        <div className={`${showScore}`}>
          <p>Score: {score.wins}/{numberOfTurns}</p>
        </div>
        {/* shows the score after 10 turns and shows a play "again button" */}
        <div className={`${showScore}`}>
          <button className='appButton' onClick={playAgain}>New Game</button>
        </div>
      </div>
      {/* link to github */}
      <p className='githubLinkText'>See the original project on&nbsp;<a href='https://github.com/kawaiimusician/color-guessing-game' target='_blank' className='githubLink'>Github</a>!</p>
      <p className='updateInfo'>Project updates (4/2024) consist of limiting a game to 10 turns and cosmetic changes.</p>
    </div>
  );
}


// app flow:
// picks 4 colors
// out of 4 colors, picks 1 to be the answer
// display colors onto the screen and allow user to click the color they think is right
// after selecting an answer the right one will stay opaque while the other 3 become translucent
// in the background, win/loss recorded to state
// update counter
// after guessing 10 times, below the colors will display the score and a "play again?" button
