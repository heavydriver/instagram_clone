import { useEffect, useState } from "react";
import faker from "faker";

const profilePic = [
  "/2022 F1 Car Race Service - Ryan Davis-5.jpg",
  "/1235804305.0.jpg",
  "/1329391003.jpg",
  "/ferrari-f1.jpg",
  "/Front-3Q-4K.jpg",
  "/GettyImages-1338033871.jpg",
  "/GettyImages-1339831595.jpg",
  "/hero1-amf1march.jpg",
  "/JBXO73QWSFM55I7DOBHQU5WE7Y.jpg",
  "/max-verstappen-of-the-netherlands-driving-the-red-bull-news-photo-1617911536_.jpg",
  "/skysports-mercedes-red-bull_5578214.jpg",
];

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="flex items-center justify-between mt-3"
        >
          <img
            src={profilePic[Math.floor(Math.random() * (10 - 0)) + 0]}
            alt="profilePic"
            className="w-10 h-10 rounded-full object-contain border p-[2px]"
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-xs font-bold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
