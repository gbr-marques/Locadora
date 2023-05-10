import NovoFilme from './components/NovoFilme'
import Prateleira from './components/Prateleira';
import { useState } from 'react';
import './styles/main.css'
import { red } from '@mui/material/colors';

function App() {

  const generos = [
    { nome: "Aventura", cor: "#bb2929" },
    { nome: "Suspense", cor: "#094b12" },
    { nome: "Comédia", cor: "#e4d720" },
    { nome: "Terror", cor: "#710692" },
    { nome: "Romance", cor: "#ee5ea1" },
    { nome: "Documentário", cor: "#50cdd1" },
  ];

  const [listaFilmes, setListaFilmes] = useState([]);

  const atualizarLista = (filmeRecebido) => {
    setListaFilmes([...listaFilmes, filmeRecebido])
    
  }
  

  const deletarColaborador = (id) => {
    setListaFilmes(listaFilmes.filter(filme => filme.id !== id));
  }

  return (
    <div className="App container">
     
      <div className="main">
        <NovoFilme atualizarLista={atualizarLista} />
        <div className='prateleira'>
          {listaFilmes.length > 0 ? (
            generos.map((genero) => (
              <Prateleira
                key={genero.nome}
                nome={genero.nome}
                cor={genero.cor}
                listaFilmes={listaFilmes.filter(
                  (filme) => filme.genero === genero.nome
                )}
                aoDeletar={deletarColaborador}
              />
            ))
          ) : (
            <h2 className="aviso">
              Nenhum filme foi cadastrado até o momento :/
            </h2>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
