import "./Filme.css";
import { Rating } from "@mui/material";
import { IoIosClose } from "react-icons/io";

const Filme = ({ id, titulo, poster, avaliacao, aoDeletar }) => {
    return (
      <div className="card_filme">
        <IoIosClose
          size={26}
          className="botao"
          onClick={() => aoDeletar(id)} />
        <h3>{titulo}</h3>
        <img alt="Pôster do filme" src={poster}></img>
        <Rating className="aval" name="read-only" precision={0.5} value={avaliacao} readOnly />
      </div>
    );
};

export default Filme;
