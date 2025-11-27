"use client";
import { useState } from "react";

interface TecnologiaDetailsCardProps {
  title: string;
  emoji: string;
  description: string;
  rating: number;
}

export default function TecnologiaDetailsCard({
  title,
  emoji,
  description,
  rating,
}: TecnologiaDetailsCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <div className="w-80 bg-white rounded-lg p-6 shadow-lg flex flex-col items-center gap-4">
      <span className="text-6xl">{emoji}</span>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      <div className="text-yellow-500 text-2xl">{`⭐`.repeat(rating)}</div>

      <button
        onClick={() => setLikes(likes + 1)}
        className="px-4 py-2 bg-blue-200 rounded"
      >
        👍 Like ({likes})
      </button>
    </div>
  );
}
