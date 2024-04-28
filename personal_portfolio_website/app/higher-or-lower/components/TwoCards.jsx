import './TwoCards.css'


export default function TwoCards({ cards, flipped, firstCardFlipped }) {
  return (
    <div className="card-grid">

      <div className='cardOne'>
        <div className={firstCardFlipped ? "" : "flipped"}>
          <img src={cards[0].src} alt={cards[0].value} className="front cardStyle" />
          <img
              src="/img/cover.png" 
              alt="card cover" 
              className="back cardStyle" 
            />
        </div>
      </div>

      <div className='cardTwo'>
        <div className={flipped ? "flipped" : ''}>
          <img 
            src={cards[1].src} 
            alt='card two' 
            className="front cardStyle" 
          />
          <img
            src="/img/cover.png" 
            alt="card cover" 
            className="back cardStyle" 
          />
        </div>
      </div>
    </div>
  )
};