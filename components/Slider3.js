import React from 'react';

const labels = ["⬅️ Wish Less", "⚖️ Just Right", "➡️ Wish More"];

export default function Slider3({ onChange }) {
  return (
    <div className="mt-4 text-center">
      <input
        type="range"
        min="0"
        max="2"
        className="w-full"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <div className="flex justify-between w-full text-sm mt-2">
        {labels.map((label, i) => (
          <span key={i}>{label}</span>
        ))}
      </div>
    </div>
  );
}
