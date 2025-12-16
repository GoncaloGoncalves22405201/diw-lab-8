"use client";
import { useState } from "react";

// POSSÍVEIS MODIFICAÇÕES:
// 1. Adicionar recursos de aprendizado (links)
// 2. Adicionar comentários/reviews
// 3. Adicionar comparação com outras tecnologias
// 4. Adicionar roadmap de aprendizado
// 5. Adicionar statistics de uso
// 6. Adicionar projetos relacionados
// 7. Adicionar share functionality
// 8. Adicionar bookmark/save
// 9. Adicionar quiz/exercises
// 10. Adicionar community links

interface TecnologiaDetailsCardProps {
  title: string;
  emoji: string;
  description: string;
  rating: number;
  // MODIFICAÇÃO POSSÍVEL: Props adicionais
  // category?: string;
  // difficulty?: string;
  // learningTime?: string;
  // prerequisites?: string[];
  // resources?: { title: string; url: string }[];
  // usedBy?: string[];
  // relatedTechs?: string[];
}

export default function TecnologiaDetailsCard({
  title,
  emoji,
  description,
  rating,
}: TecnologiaDetailsCardProps) {
  const [likes, setLikes] = useState(0);
  
  // MODIFICAÇÃO POSSÍVEL: Estados adicionais
  // const [isSaved, setIsSaved] = useState(false);
  // const [showResources, setShowResources] = useState(false);
  // const [userRating, setUserRating] = useState(0);
  // const [comments, setComments] = useState<string[]>([]);

  return (
    <div className="w-80 bg-white rounded-lg p-6 shadow-lg flex flex-col items-center gap-4">
      {/* MODIFICAÇÃO POSSÍVEL: Header com badges
      <div className="w-full flex justify-between items-start">
        <div className="flex gap-2">
          {category && (
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
              {category}
            </span>
          )}
          {difficulty && (
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
              {difficulty}
            </span>
          )}
        </div>
        <button onClick={() => setIsSaved(!isSaved)}>
          {isSaved ? "🔖" : "📑"}
        </button>
      </div>
      */}
      
      <span className="text-6xl">{emoji}</span>
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-gray-600 text-center">{description}</p>
      
      {/* MODIFICAÇÃO POSSÍVEL: Informações adicionais
      {learningTime && (
        <div className="w-full p-3 bg-gray-50 rounded">
          <p className="text-sm">
            <span className="font-semibold">⏱️ Tempo de aprendizado:</span> {learningTime}
          </p>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Prerequisites
      {prerequisites && prerequisites.length > 0 && (
        <div className="w-full">
          <h4 className="font-semibold text-sm mb-2">📚 Pré-requisitos:</h4>
          <ul className="text-sm space-y-1">
            {prerequisites.map((prereq, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                {prereq}
              </li>
            ))}
          </ul>
        </div>
      )}
      */}
      
      <div className="text-yellow-500 text-2xl">{`⭐`.repeat(rating)}</div>
      
      {/* MODIFICAÇÃO POSSÍVEL: User rating
      <div className="w-full">
        <p className="text-sm text-center mb-2">Avalie esta tecnologia:</p>
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setUserRating(star)}
              className="text-2xl"
            >
              {star <= userRating ? "⭐" : "☆"}
            </button>
          ))}
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Statistics
      <div className="w-full grid grid-cols-3 gap-2">
        <div className="text-center p-2 bg-blue-50 rounded">
          <p className="text-xl font-bold">95%</p>
          <p className="text-xs">Satisfação</p>
        </div>
        <div className="text-center p-2 bg-green-50 rounded">
          <p className="text-xl font-bold">10k+</p>
          <p className="text-xs">Estudantes</p>
        </div>
        <div className="text-center p-2 bg-yellow-50 rounded">
          <p className="text-xl font-bold">200+</p>
          <p className="text-xs">Projetos</p>
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Used by companies
      {usedBy && usedBy.length > 0 && (
        <div className="w-full">
          <h4 className="font-semibold text-sm mb-2 text-center">🏢 Usado por:</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {usedBy.map((company) => (
              <span key={company} className="text-xs bg-gray-100 px-3 py-1 rounded-full">
                {company}
              </span>
            ))}
          </div>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Related technologies
      {relatedTechs && relatedTechs.length > 0 && (
        <div className="w-full">
          <h4 className="font-semibold text-sm mb-2">🔗 Tecnologias Relacionadas:</h4>
          <div className="flex flex-wrap gap-2">
            {relatedTechs.map((tech) => (
              <span key={tech} className="text-xs bg-blue-100 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Resources section
      {resources && resources.length > 0 && (
        <div className="w-full">
          <button
            onClick={() => setShowResources(!showResources)}
            className="w-full text-sm font-semibold text-blue-500 hover:underline"
          >
            {showResources ? "Ocultar" : "Mostrar"} Recursos de Aprendizado
          </button>
          {showResources && (
            <ul className="mt-2 space-y-2">
              {resources.map((resource, i) => (
                <li key={i}>
                  
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-500 hover:underline"
                  >
                    📖 {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      */}

      <button
        onClick={() => setLikes(likes + 1)}
        className="px-4 py-2 bg-blue-200 rounded hover:bg-blue-300 transition-colors"
      >
        👍 Like ({likes})
      </button>
      
      {/* MODIFICAÇÃO POSSÍVEL: Share button
      <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
        🔗 Compartilhar
      </button>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Comments section
      <div className="w-full mt-4">
        <h4 className="font-semibold mb-2">💬 Comentários</h4>
        <textarea
          placeholder="Deixe seu comentário..."
          className="w-full p-2 border rounded text-sm"
          rows={3}
        />
        <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded text-sm">
          Enviar
        </button>
        <div className="mt-4 space-y-2">
          {comments.map((comment, i) => (
            <div key={i} className="p-2 bg-gray-50 rounded text-sm">
              {comment}
            </div>
          ))}
        </div>
      </div>
      */}
      
      {/* MODIFICAÇÃO POSSÍVEL: Progress tracking
      <div className="w-full p-3 bg-blue-50 rounded">
        <p className="text-sm font-semibold mb-2">📊 Seu Progresso:</p>
        <div className="bg-gray-200 rounded-full h-2 mb-1">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: "0%" }} />
        </div>
        <p className="text-xs text-center">0% completo</p>
        <button className="mt-2 w-full py-1 bg-blue-500 text-white rounded text-sm">
          Começar a Aprender
        </button>
      </div>
      */}
    </div>
  );
}