const HowTo = () => {
    return (
        <div className="how-to-container">
            <h1 id="how-to-title">How To Play</h1>
            <div className="tutorial-box">
                <h2 className="logo">Objective of the Game</h2>
                <p className="how-to-text">{`You start the game suffering from a constant nightmare. Click the game board to "flip" it over and view the details of the dream. After 2 minutes click to close and start the game by clicking on the top deck of cards.\n\n   This demo only contains Chapter 1 of 5. Your objective is to complete Chapter 1 and get inside the Marsden House.`}   </p>
            </div>
            <div className="tutorial-box">
                <h2 className="logo">Items</h2>
                <p className="how-to-text">   As you progress through the game you may obtain items that help you in challenges. You can use the item to assist you, but, if you fail the challenge, you lose the item.</p>
            </div>
            <div className="tutorial-box">
                <h2 className="logo">Danger Meter</h2>
                <p className="how-to-text">   Located in the center of the game board, the danger meter represents the number you have to meet or exceed in your dice roll to succeed. When faced with an optional or required challenge, roll the dice. If you win, proceed with the card's instructions. If you fail, raise the challenge meter as per the card's intructions. If the danger meter reaches the top, reset the piece to the start by clicking reset in the controls drawer. After doing so you must lower your psychic level by 2.</p>
            </div>
            <div className="tutorial-box">
                <h2 className="logo">Psychic Scale</h2>
                <p className="how-to-text">   Having a high Psychic level will allow you to receive additional clues throughout your adventures. You also recieve more beneficial rewards! </p>
            </div>
            <div className="tutorial-box">
                <h2 className="logo">Death</h2>
                <p className="how-to-text">   Death is an ever present danger, but take heart! Death is NOT the end. You can keep playing if you died. Follow the instructions on the card and continue on your adventure.</p>
            </div>
        </div>
    )
}
export default HowTo