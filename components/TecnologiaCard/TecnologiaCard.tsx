import Link from "next/link";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar hover effects elaborados
// 2. Adicionar badge de "novo" ou "popular"
// 3. Adicionar rating visual
// 4. Adicionar quick preview ao hover
// 5. Adicionar favorite/bookmark button
// 6. Adicionar progress indicator
// 7. Adicionar category badge
// 8. Adicionar flip animation
// 9. Adicionar share button
// 10. Adicionar tooltip com info extra

interface TecnologiaCardProps {
  title: string;
  emoji: string;
  index: number;
  // MODIFICAÇÃO POSSÍVEL: Props adicionais
  // category?: string;
  // isNew?: boolean;
  // isPopular?: boolean;
  // difficulty?: "easy" | "medium" | "hard";
  // learningProgress?: number;
  // rating?: number;
}

export default function TecnologiaCard({ title, emoji, index }: TecnologiaCardProps) {
  // MODIFICAÇÃO POSSÍVEL: Estado para favorite
  // const [isFavorite, setIsFavorite] = useState(false);
  
  // MODIFICAÇÃO POSSÍVEL: Verificar se já foi visitado
  // const [isVisited, setIsVisited] = useState(false);
  // useEffect(() => {
  //   const visited = localStorage.getItem(`tech-visited-${index}`);
  //   setIsVisited(!!visited);
  // }, [index]);

  return (
    <Link href={`/tecnologias/${index}`}>
      <div className="w-48 h-48 bg-white rounded-lg p-4 m-2 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
        {/* MODIFICAÇÃO POSSÍVEL: Badges
        <div className="absolute top-2 right-2 flex gap-1">
          {isNew && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
              NOVO
            </span>
          )}
          {isPopular && (
            <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded">
              🔥
            </span>
          )}
        </div>
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Indicador de visitado
        {isVisited && (
          <div className="absolute top-2 left-2">
            <span className="text-green-500">✓</span>
          </div>
        )}
        */}
        
        <span className="text-5xl mb-4">{emoji}</span>
        <h3 className="text-lg font-semibold text-center">{title}</h3>
        
        {/* MODIFICAÇÃO POSSÍVEL: Category badge
        {category && (
          <span className="mt-2 text-xs bg-gray-200 px-2 py-1 rounded">
            {category}
          </span>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Difficulty indicator
        {difficulty && (
          <div className="mt-2 flex gap-1">
            <span className={difficulty === "easy" ? "text-green-500" : "text-gray-300"}>●</span>
            <span className={difficulty === "medium" ? "text-yellow-500" : "text-gray-300"}>●</span>
            <span className={difficulty === "hard" ? "text-red-500" : "text-gray-300"}>●</span>
          </div>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Progress bar
        {learningProgress !== undefined && (
          <div className="w-full mt-2">
            <div className="bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${learningProgress}%` }}
              />
            </div>
            <p className="text-xs text-center mt-1">{learningProgress}% completo</p>
          </div>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Rating stars
        {rating && (
          <div className="mt-2 text-yellow-500">
            {"⭐".repeat(rating)}
          </div>
        )}
        */}
        
        {/* MODIFICAÇÃO POSSÍVEL: Favorite button
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsFavorite(!isFavorite);
          }}
          className="absolute bottom-2 right-2 text-xl"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
        */}
      </div>
    </Link>
  );
}