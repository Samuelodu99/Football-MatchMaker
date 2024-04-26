// import { matchOptions } from "../constants";
// import Heading from "./Heading";
// import Section from "./Section";
// import Arrow from "../assets/svg/Arrow";
// import { GradientLight } from "./design/Benefits";
// import ClipPath from "../assets/svg/ClipPath";

// const FindMatch = () => {
//   return (
//       <Section id="find-a-match">
//           <div className="container relative z-2">
//               <Heading
//                   className="md:max-w-md lg:max-w-2xl"
//                   title="Find Your Perfect Football Match"
//               />

//               <div className="flex flex-wrap gap-10 mb-10">
//                   {matchOptions.map((option) => (
//                       <div
//                           className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
//                           style={{
//                               backgroundImage: `url(${option.backgroundUrl})`,
//                           }}
//                           key={option.id}
//                       >
//                           <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
//                               <h5 className="h5 mb-5">{option.title}</h5>
//                               <p className="body-2 mb-6 text-n-3">{option.text}</p>
//                               <div className="flex items-center mt-auto">
//                                   <img
//                                       src={option.iconUrl}
//                                       width={48}
//                                       height={48}
//                                       alt={option.title}
//                                   />
//                                   <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
//                                       Explore more
//                                   </p>
//                                   <Arrow />
//                               </div>
//                           </div>

//                           {option.light && <GradientLight />}

//                           <div
//                               className="absolute inset-0.5 bg-n-8"
//                               style={{ clipPath: "url(#find-a-match)" }}
//                           >
//                               <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
//                                   {option.imageUrl && (
//                                       <img
//                                           src={option.imageUrl}
//                                           width={380}
//                                           height={362}
//                                           alt={option.title}
//                                           className="w-full h-full object-cover"
//                                       />
//                                   )}
//                               </div>
//                           </div>

//                           <ClipPath />
//                       </div>
//                   ))}
//               </div>
//           </div>
//       </Section>
//   );
// };

// export default FindMatch;

import React, { useState } from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { GradientLight } from "./design/Benefits";

const FindMatch = () => {
    const [location, setLocation] = useState('');
    const [teamName, setTeamName] = useState('');
    const [playerCount, setPlayerCount] = useState('');
    const [loading, setLoading] = useState(false);
    const [matches, setMatches] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);  // Set loading to true before starting the API call

        try {
            const response = await fetch('https://yourapi.com/matches', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location: location,
                    teamName: teamName,
                    playerCount: parseInt(playerCount, 10)
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setMatches(data.matches);  // Assume the response contains an array of matches
        } catch (error) {
            console.error("Failed to fetch matches:", error);
            // You might want to set an error message in state and show it to the user
        } finally {
            setLoading(false);  // Reset loading state regardless of the outcome
        }
    };

    return (
        <Section id="find-a-match">
            <div className="container mx-auto pt-12 pb-12">
                <Heading title="Find Your Football Match" />
                <GradientLight />
                <form onSubmit={handleSubmit} className="mt-8">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="location">
                            Location
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="location"
                            type="text"
                            placeholder="Enter location"
                            value={location}
                            onChange={e => setLocation(e.target.value)}
                        />
                    </div>
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
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" htmlFor="players">
                            Number of Players
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="players"
                            type="number"
                            placeholder="Enter number of players"
                            value={playerCount}
                            onChange={e => setPlayerCount(e.target.value)}
                        />
                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Searching...' : 'Search Matches'}
                    </button>
                </form>

                {matches.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-lg font-bold">Match Results:</h2>
                        <ul>
                            {matches.map(match => (
                                <li key={match.id} className="mt-2">
                                    {match.name} - Players: {match.playerCount} - Location: {match.location}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Section>
    );
};

export default FindMatch;
