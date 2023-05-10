import { useState } from "react";
import FilmeForm from "../FilmeForm";

const NovoFilme = (props) => {

    const atribuirID = (dados) => {
        const dadosFilme = {
            ...dados,
            id: (Math.floor((Math.random().toString())*1000))
        }
        props.atualizarLista(dadosFilme)
    }

    return (
      <div className="novo_filme_container">
        <FilmeForm atribuirID={atribuirID} />
      </div>
    );

}

export default NovoFilme