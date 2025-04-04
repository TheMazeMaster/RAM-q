import React from 'react';

export default function InstinctSelector({ instincts, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {instincts.map((instinct, index) => (
        <button
          key={index}
          className="bg-blue-100 hover:bg-blue-300 p-2 rounded-xl"
          onClick={() => onSelect(instinct)}
        >
          {instinct.name}
        </button>
      ))}
    </div>
  );
}
