import Link from "next/link";

interface TecnologiaCardProps {
  title: string;
  emoji: string;
  index: number;
}

export default function TecnologiaCard({ title, emoji, index }: TecnologiaCardProps) {
  return (
    <Link href={`/tecnologias/${index}`}>
      <div className="w-48 h-48 bg-white rounded-lg p-4 m-2 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        <span className="text-5xl mb-4">{emoji}</span>
        <h3 className="text-lg font-semibold text-center">{title}</h3>
      </div>
    </Link>
  );
}