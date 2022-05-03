import React from 'react'
export const Cardbox = ({ clueToggle, getData, clues, toggleClueView, getClueData }) => {
    return (
        <div className="clueBox" style={{ opacity: clueToggle ? "100" : "0", right: clueToggle ? "0" : "-500px    " }}>
            <div className="chapNumBox">
                <button className="clueClose closeWindow" onClick={toggleClueView}>x</button>
                <h2>{clues.chapter}</h2>
                <h2>{`Clue: #${clues.cardNumber}`}</h2>
            </div>
            <div className="card-box-image">
                <img src={clues.img} />
            </div>
            <p className="clue-description">{clues.description}</p>
            <h2 id="clickable" onClick={() => { getData(clues.choice1._id) }}>{clues.cardPrompt1}</h2>
            <h2 id="clickable" onClick={() => { getClueData(clues.clue1._id) }}>{clues.cluePrompt1}</h2>
            <h2 id="clickable" onClick={() => { getClueData(clues.clue2._id) }}>{clues.cluePrompt2}</h2>
        </div>
    )
}
