import "./Prateleira.css";
import Filme from "../Filme"; 

const Prateleira = ({ listaFilmes, nome, cor, aoDeletar }) => {
  return listaFilmes.length > 0 ? (
    <section className="categoria_container">
      <h2 className="nome_genero" style={{borderBottom: `7px solid ${cor}`}}>{nome}</h2>
      <div className="categoria">
        {listaFilmes.map((filme) => (
          <Filme
            key={filme.id}
            id={filme.id}
            titulo={filme.titulo}
            poster={filme.poster}
            avaliacao={filme.avaliacao}
            aoDeletar={aoDeletar}
          />
        ))}
      </div>
      <h2 className="divisor"></h2>
    </section>
  ) : (
    ''
  );
};

export default Prateleira;
