import faker from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

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

function Stories() {
  const [suggestions, setSuggestions] = useState([]);
  const { data: session } = useSession();

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story img={session.user.image} username={session.user.username} />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profilePic[Math.floor(Math.random() * (10 - 0)) + 0]}
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
