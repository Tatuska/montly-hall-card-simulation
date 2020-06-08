import React, { useState } from 'react'


function Card({ img, playCard, index, open, amountClicked, chosenIndex }) {

    const [boxShadow, setBoxShadow] = useState('');

    const chooseCard = () => {
        if (amountClicked !== 2 && !open) {
            setBoxShadow(' 0px 0px 10px 0px rgba(235,18,80,1)')
            playCard(index);
        }

    }

    return (
        <div onClick={chooseCard}>
            <div className="flip-card">
                <div className="flip-card-inner" style={{
                    transform: open ? "rotateY(180deg)" : "",
                    boxShadow: chosenIndex !== index ? "" : boxShadow
                }}>
                    <div className="flip-card-front">
                        <img className="card-img" src="http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg" alt="Avatar" />
                    </div>
                    <div className="flip-card-back">
                        <img className="door-img img-thumbnail" src={img} alt="door or goat" />
                    </div>
                </div>
            </div >
        </div >
    )

}

export default Card;
