import React from 'react';
import Link from 'next/link';

export default function ProgressNav({ current, total }) {
  return (
    <div className="mt-6 flex justify-between items-center">
      <span>Theme {current} of {total}</span>
      {current < total && (
        <Link href={`/themes/${current + 1}`} className="ml-auto bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
          Next
        </Link>
      )}
    </div>
  );
}
