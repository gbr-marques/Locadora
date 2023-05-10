import { useState } from "react";
import Rating from "@mui/material/Rating";

import './FilmeForm.css'

const FilmeForm = (props) => {
    
  const generos = [
    {
      nome: "Selecione o gênero do filme",
      valor: "vazio",
    },
    {
      nome: "Aventura",
      valor: "Aventura",
    },
    {
      nome: "Suspense",
      valor: "Suspense",
    },
    {
      nome: "Comédia",
      valor: "Comédia",
    },
    {
      nome: "Terror",
      valor: "Terror",
    },
    {
      nome: "Romance",
      valor: "Romance",
    },
    {
      nome: "Documentário",
      valor: "Documentário",
    },
  ];

  const [tituloDigitado, setTitulo] = useState("");
  const [posterDigitado, setPoster] = useState("");
  const [avaliacaoDigitada, setAvaliacao] = useState("");
  const [generoDigitado, setGenero] = useState("");

  const aoDigitarTitulo = (digitacao) => {
    setTitulo(digitacao.target.value);
  };

  const aoDigitarPoster = (digitacao) => {
    setPoster(digitacao.target.value);
  };

  const aoDigitarAvaliacao = (digitacao) => {
    setAvaliacao(digitacao.target.value);
  };

  const aoDigitarGenero = (digitacao) => {
    setGenero(digitacao.target.value);
  };

  const aoCadastrarFilme = (clique) => {
    clique.preventDefault();
    const DadosDigitados = {
      titulo: tituloDigitado,
      poster: posterDigitado,
      avaliacao: avaliacaoDigitada,
      genero: generoDigitado,
    };
    props.atribuirID(DadosDigitados);
    setTitulo('')
    setPoster('');
    setAvaliacao(0);
    setGenero('');
  };

  return (
    <div className="novo_filme">
      <form className="form">
        <h1 className="titulo">Cadastre seus filmes assistidos</h1>
        <div className="campo_div">
          <label>Título do filme </label>
          <input
            className="campo"
            name="titulo"
            type="text"
            value={tituloDigitado}
            placeholder="Digite o título do filme"
            onChange={aoDigitarTitulo}
          />
        </div>

        <div className="campo_div">
          <label>Pôster do filme: </label>
          <input
            className="campo"
            name="poster"
            type="text"
            value={posterDigitado}
            placeholder="Insira a URL da imagem"
            onChange={aoDigitarPoster}
          />
        </div>

        <div className="campo_div">
          <label>Avaliação </label>
          <Rating
            className="aval"
            name="avaliacao"
            value={avaliacaoDigitada}
            precision={0.5}
            size="large"
            onChange={aoDigitarAvaliacao}
          />
        </div>

        <div className="campo_div">
          <label>Gênero </label>
          <select
            className="campo"
            name="genero"
            value={generoDigitado}
            onChange={aoDigitarGenero}
          >
            {generos.map((genero) => (
              <option key={genero.nome} value={genero.valor}>
                {genero.nome}
              </option>
            ))}
          </select>
        </div>

        <button onClick={aoCadastrarFilme}>Cadastrar filme</button>
      </form>
    </div>
  );
};

export default FilmeForm;
