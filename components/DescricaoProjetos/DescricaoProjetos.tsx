import Projeto from "@/components/Projeto/Projeto";

export default function DescricaoProjetos() {
  return (
    <div className="flex flex-col gap-4">
      <p>
        Nesta disciplina desenvolvi vários projetos de front-end. Pode ver mais
        exemplos na minha página de projetos em:
        <a
          href="https://github.com/GoncaloGoncalves22405201/GoncaloGoncalves22405201.github.io"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 underline ml-1"
        >
          GitHub Pages
        </a>
        .
      </p>
      <Projeto
        nome="Loja Online"
        url="https://github.com/GoncaloGoncalves22405201/GoncaloGoncalves22405201.github.io"
      />
      <Projeto
        nome="Site com JS Interativo"
        url="https://github.com/GoncaloGoncalves22405201/GoncaloGoncalves22405201.github.io"
      />
    </div>
  );
}
