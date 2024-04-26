import React, { useState } from 'react';

function FindMatch() {
  const [location, setLocation] = useState('');
  const [teamName, setTeamName] = useState('');
  const [playerCount, setPlayerCount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted:", { location, teamName, playerCount });
    alert(`Searching matches for ${teamName} at ${location} with ${playerCount} players`);
  };

  return (
    <div className="find-match-container">
      <h1>Find a Match</h1>
      <form onSubmit={handleSubmit} className="match-form">
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={e => setLocation(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Team Name:
          <input
            type="text"
            value={teamName}
            onChange={e => setTeamName(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <label>
          Amount of Players:
          <input
            type="number"
            value={playerCount}
            onChange={e => setPlayerCount(e.target.value)}
            className="input-field"
          />
        </label>
        <br />
        <button type="submit" className="submit-button">Search Matches</button>
      </form>
    </div>
  );
}

export default FindMatch;
