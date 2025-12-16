import Link from "next/link";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar ícone/emoji para cada característica
// 2. Adicionar preview/tooltip ao hover
// 3. Adicionar categoria/tag visual
// 4. Adicionar indicador de "novo" ou "popular"
// 5. Adicionar rating/difficulty level
// 6. Adicionar tempo estimado de leitura
// 7. Adicionar bookmark/favorite functionality
// 8. Adicionar share button
// 9. Adicionar progress indicator (se já visitado)
// 10. Adicionar animação de entrada

interface CaracteristicaProps {
  caracteristica: string;
  index: number;
  // MODIFICAÇÃO POSSÍVEL: Adicionar props extras
  // category?: string;
  // isNew?: boolean;
  // difficulty?: "easy" | "medium" | "hard";
  // icon?: string;
}

export default function Caracteristica({ caracteristica, index }: CaracteristicaProps) {
  // MODIFICAÇÃO POSSÍVEL: Estado para favorite
  // const [isFavorite, setIsFavorite] = useState(false);
  
  // MODIFICAÇÃO POSSÍVEL: Tracking de visitados
  // const [isVisited, setIsVisited] = useState(false);
  // useEffect(() => {
  //   const visited = localStorage.getItem(`visited-${index}`);
  //   setIsVisited(!!visited);
  // }, [index]);

  return (
    <Link href={`/caracteristicas/${index}`}>
      <li className="p-3 bg-white rounded-lg shadow-sm mb-2 hover:shadow-md hover:bg-gray-50 transition-all cursor-pointer list-none">
        {/* MODIFICAÇÃO POSSÍVEL: Adicionar badge "novo"
        {isNew && (
          <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded mr-2">
            NOVO
          </span>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Adicionar ícone
        <span className="mr-2">{icon || "📝"}</span>
        */}
        
        {caracteristica}
        
        {/* MODIFICAÇÃO POSSÍVEL: Adicionar indicador de visitado
        {isVisited && (
          <span className="ml-2 text-green-500">✓</span>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Adicionar categoria
        {category && (
          <span className="ml-2 text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {category}
          </span>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Adicionar difficulty indicator
        {difficulty && (
          <span className="ml-2">
            {difficulty === "easy" && "🟢"}
            {difficulty === "medium" && "🟡"}
            {difficulty === "hard" && "🔴"}
          </span>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Adicionar favorite button
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="float-right"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
        */}
      </li>
    </Link>
  );
}