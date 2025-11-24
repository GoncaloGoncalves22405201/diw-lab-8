type ProjetoProps = {
  nome: string;
  url: string;
};

export default function Projeto({ nome, url }: ProjetoProps) {
  return (
    <div className="bg-white p-3 m-2 rounded-lg shadow-sm">
      <p>
        Projeto: <strong>{nome}</strong>
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 underline"
      >
        Ver este projeto
      </a>
    </div>
  );
}
