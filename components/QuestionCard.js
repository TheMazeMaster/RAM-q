import React from 'react';

export default function QuestionCard({ title, questions, onSelect }) {
  return (
    <div className="mb-6 p-4 border rounded-xl shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {Object.entries(questions).map(([key, text]) => (
        <div key={key} className="mb-2">
          <button
            className="w-full text-left p-3 rounded-md bg-gray-100 hover:bg-gray-200"
            onClick={() => onSelect(key)}
          >
            <strong>{key}</strong>: {text}
          </button>
        </div>
      ))}
    </div>
  );
}
