import React from "react";

interface Idea {
  nick: string;
  name: string;
  description: string;
}

export const App: React.FC = () => {
  const ideas: Idea[] = [
    {
      nick: "cool-idea-nick-1",
      name: "idea 1",
      description: "Description of idea 1...",
    },
    {
      nick: "cool-idea-nick-2",
      name: "idea 2",
      description: "Description of idea 2...",
    },
    {
      nick: "cool-idea-nick-3",
      name: "idea 3",
      description: "Description of idea 3...",
    },
    {
      nick: "cool-idea-nick-4",
      name: "idea 4",
      description: "Description of idea 4...",
    },
    {
      nick: "cool-idea-nick-5",
      name: "idea 5",
      description: "Description of idea 5...",
    },
  ];

  return (
    <div>
      <h1>Ideas</h1>
      {ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.name}</h2>
          <p>{idea.description}</p>
        </div>
      ))}
    </div>
  );
};
