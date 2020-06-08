import React, { useEffect, useState } from 'react'
import Card from './Card'
import Button from './Button'
import goat from '../img/goat.png'
import car from '../img/car.png'
import Toast from './Toast'

function Game(props) {

    const initialValue = [
        { open: false, choosen: false, index: 0, car: false }];

    const allowedState = [
        { open: false, choosen: false, index: 0, car: false },
        { open: false, choosen: false, index: 1, car: false },
        { open: false, choosen: false, index: 2, car: false },
    ];
    const [amountClicked, setAmountClicked] = useState(0);
    const [congratulation, setCongratulation] = useState(false);
    const [games, setGames] = useState(0);
    const [wins, setWins] = useState(0);
    const [chosenIndex, setChosenIndex] = useState('');
    const [cards, setCards] = useState(initialValue);



    useEffect(() => {
        let random = Math.floor(Math.random() * 3);
        let options = allowedState;
        options[random].car = true;
        setCards(allowedState);

    }, []);

    const playCard = (choosenIndex) => {
        setChosenIndex(choosenIndex)
        if (!amountClicked) {
            setAmountClicked(amountClicked + 1)
            let randomIndex = Math.floor(Math.random() * 3);
            while (randomIndex === choosenIndex || cards[randomIndex].car) {
                randomIndex = Math.floor(Math.random() * 3);
            }
            let all = cards;
            all[choosenIndex].choosen = true;
            all[randomIndex].open = true;
            setCards(all)
        }
        else {
            setAmountClicked(amountClicked + 1)
            let newCards = [...cards];
            newCards[choosenIndex].open = true
            setCards(newCards)

            if (cards[choosenIndex].car) {
                setCongratulation(true)
                setWins(wins + 1)
            }
            setGames(games + 1)
        }
    }

    const reset = () => {
        setAmountClicked(0);
        setCongratulation(false);
        setChosenIndex('')
        let random = Math.floor(Math.random() * 3);
        let options = allowedState;
        setCards(options);
        setTimeout(() => {
            options[random].car = true;
            setCards(options);
        }, 500);
    }

    return (
        <div className="game-container">
            <Toast games={games} wins={wins} />
            <h1>Try to win a car</h1>
            <div className="door-container">
                {cards.map((card, index) =>
                    <Card img={card.car ? car : goat} playCard={playCard}
                        index={index} open={card.open} key={index}
                        amountClicked={amountClicked}
                        chosenIndex={chosenIndex} />
                )}
            </div>
            <div className="game-text">
                <h2>{amountClicked === 1 && !congratulation ? ' Please confirm your choice. You have possibility to change it also!' : ''}</h2>
                <h2 className="game-congrates">{amountClicked === 2 && congratulation ? 'Amazing game. Congratulations' : ''}</h2>
                <h2 className="game-congrates">{amountClicked === 2 && !congratulation ? 'Sorry try next time!' : ''}</h2>
            </div>
            {amountClicked === 2 ? <Button value="Next game" reset={reset} /> : ''}
        </div>
    )
}

export default Game;
