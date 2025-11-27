import TecnologiaCard from "@/components/TecnologiaCard/TecnologiaCard";
import tecnologias from "@/app/data/tecnologias.json";

export default function TecnologiasPage() {
  return (
    <>
      <h2>Tecnologias Exploradas</h2>
      <p>
        Neste componente irá apresentar as tecnologias que aprendeu nesta
        disciplina: HTML, CSS, Tailwind CSS, JavaScript, TypeScript, JSON, API
        RESTful, Swagger, GitHub, Codespaces, GitHub Pages, React.js, Next.js,
        Vercel.
      </p>
      <div className="flex flex-wrap justify-center mt-4">
        {tecnologias.map((tecnologia, index) => (
          <TecnologiaCard
            key={tecnologia.title}
            title={tecnologia.title}
            emoji={tecnologia.emoji}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
