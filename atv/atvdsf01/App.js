import React, { useState } from 'react';
import Login from './Login';
import Recuperar from './Recuperar';
import Estoque from './Estoque';
import Adicionar from './Adicionar';
import Editar from './Editar';

export default function App() {
  const [telaAtual, setTelaAtual] = useState('Login');
  const [estoque, setEstoque] = useState([
    { nome: 'Parafuso', quantidade: 100, codigo: 'P001' },
    { nome: 'Engrenagem', quantidade: 50, codigo: 'E002' },
  ]);
  const [codigoEditar, setCodigoEditar] = useState(null);

  switch (telaAtual) {
    case 'Login':
      return <Login navegar={setTelaAtual} />;
    case 'Recuperar':
      return <Recuperar navegar={setTelaAtual} />;
    case 'Estoque':
      return <Estoque estoque={estoque} setTelaAtual={setTelaAtual} setCodigoEditar={setCodigoEditar} />;
    case 'Adicionar':
      return <Adicionar estoque={estoque} setEstoque={setEstoque} navegar={setTelaAtual} />;
    case 'Editar':
      return <Editar codigo={codigoEditar} estoque={estoque} setEstoque={setEstoque} navegar={setTelaAtual} />;
    default:
      return null;
  }
}