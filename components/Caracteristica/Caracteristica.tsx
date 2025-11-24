import Link from "next/link";

interface CaracteristicaProps {
  caracteristica: string;
  index: number;
}

export default function Caracteristica({ caracteristica, index }: CaracteristicaProps) {
  return (
    <Link href={`/caracteristicas/${index}`}>
      <li className="p-3 bg-white rounded-lg shadow-sm mb-2 hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer list-none">
        {caracteristica}
      </li>
    </Link>
  );
}