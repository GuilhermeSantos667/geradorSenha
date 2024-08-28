import { useState } from 'react';
import global from './Global.module.css';

function App() {
  const [password, setPassword] = useState('');
  const [padrao, setValor] = useState('copiar');
  const [valor, voltarValor] = useState('copiado');

  const gerarSenha = () => {
    let caracteres = '';
    const caracteresPossiveis =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 10; i++) {
      const indiceAleatorio = Math.floor(
        Math.random() * caracteresPossiveis.length,
      );
      caracteres += caracteresPossiveis.charAt(indiceAleatorio);
    }
    setPassword(caracteres);
    setValor('copiar');
    return caracteres;
  };

  const copiarSenha = () => {
    window.navigator.clipboard.writeText(password);
    setValor('copiado');
  };

  return (
    <>
      <div className={global.container}>
        <div className={global.itens}>
          <button onClick={gerarSenha} className={global.button}>
            gerar
          </button>
          <button onClick={copiarSenha} className={global.button}>
            {padrao}
          </button>
        </div>
        <div className={global.senha}>{password}</div>
      </div>
    </>
  );
}

export default App;
