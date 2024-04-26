import React, { useState } from 'react';
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button"; // Assuming Button is a styled component you have

const RegisterTeam = () => {
    const [teamName, setTeamName] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [numberOfPlayers, setNumberOfPlayers] = useState('');
    const [leaderPhone, setLeaderPhone] = useState('');
    const [leaderEmail, setLeaderEmail] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Placeholder for where you'd handle form submission, e.g., API call
        alert(`Team Name: ${teamName}, Country: ${country}, City: ${city}, Players: ${numberOfPlayers}, Leader's Phone: ${leaderPhone}, Leader's Email: ${leaderEmail}`);
    };

    return (
        <Section id="register-team" className="register-team-section">
            <div className="container mx-auto pt-12 pb-12">
                <Heading title="Register Your Team" />
                <form onSubmit={handleSubmit} className="mt-8">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="team-name">
                            Team Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="team-name"
                            type="text"
                            placeholder="Enter team name"
                            value={teamName}
                            onChange={e => setTeamName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="country">
                            Country
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="country"
                            type="text"
                            placeholder="Enter country"
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="city"
                            type="text"
                            placeholder="Enter city"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" htmlFor="number-of-players">
                            Number of Players
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="number-of-players"
                            type="number"
                            placeholder="Enter number of players"
                            value={numberOfPlayers}
                            onChange={e => setNumberOfPlayers(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="leader-phone">
                            Team Leader's Phone Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="leader-phone"
                            type="tel"
                            placeholder="Enter team leader's phone number"
                            value={leaderPhone}
                            onChange={e => setLeaderPhone(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="leader-email">
                            Team Leader's Email Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="leader-email"
                            type="email"
                            placeholder="Enter team leader's email address"
                            value={leaderEmail}
                            onChange={e => setLeaderEmail(e.target.value)}
                        />
                    </div>
                    <Button type="submit" white>Register Team</Button>
                </form>
            </div>
        </Section>
    );
};

export default RegisterTeam;
