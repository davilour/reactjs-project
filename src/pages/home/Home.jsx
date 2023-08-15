import { useRef } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { AddButton, Container, Product } from "./style";

function Home() {
  const inputRef = useRef();
  const [produtos, setProdutos] = useState([]);

  function ClickButton() {
    //console.log(v4());
    setProdutos([
      {
        id: v4(),
        nome: inputRef.current.value,
      },

      ...produtos,
    ]);

    inputRef.current.value = "";
  }

  function DeletProduto(id) {
    console.log(id);
    setProdutos(produtos.filter((produto) => produto.id != id));
  }
  return (
    <Container>
      <h1>Lista de compras</h1>
      <input placeholder="Produto" ref={inputRef} />
      <AddButton onClick={ClickButton}>Adicionar</AddButton>

      {produtos.map((produto) => (
        <Product key={produto.id}>
          <p>{produto.nome}</p>
          <button onClick={() => DeletProduto(produto.id)}>Deletar</button>
        </Product>
      ))}
    </Container>
  );
}

export default Home;
