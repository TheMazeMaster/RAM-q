import React from 'react';

export default function Slider5({ scale, onChange }) {
  return (
    <div className="mt-4">
      <div className="flex flex-col items-center">
        <input
          type="range"
          min="0"
          max="4"
          className="w-full"
          onChange={(e) => onChange(Number(e.target.value))}
        />
        <div className="flex justify-between w-full text-sm mt-2">
          {scale.map((label, i) => (
            <span key={i}>{label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
