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
  return (
    <div className="w-80 bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
      <span className="text-6xl mb-4">{emoji}</span>
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      <div className="text-yellow-500 text-2xl">
        {"⭐".repeat(rating)}
      </div>
    </div>
  );
}