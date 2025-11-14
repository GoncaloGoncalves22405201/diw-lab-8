import tecnologias from '@/app/data/tecnologias.json';

export default function Page() {
  return (
    <>
      <h2>Tecnologias Exploradas</h2>
      <p>
        Neste componente irá apresentar as tecnologias que aprendeu nesta disciplina: HTML, CSS,
        Tailwind CSS, JavaScript, TypeScript, JSON, API RESTful, Swagger, GitHub, Codespaces, GitHub
        Pages, React.js, Next.js, Vercel.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {tecnologias.map((tecnologia, i) => {
          return (
            <div key={i} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
              <div className="text-6xl mb-4">{tecnologia.emoji}</div>
              <h3 className="text-center font-bold mt-2">{tecnologia.title}</h3>
              <p className="text-sm text-center text-gray-600">{tecnologia.description}</p>
              <div className="text-center mt-2 text-yellow-500">
                {'⭐'.repeat(tecnologia.rating)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}