import { Route, Routes } from "react-router-dom";
import "./App.css";
import CadastroDeUsuarios from "./pages/loginDeUsuarios/cadastro/cadastroDeUsuarios";
import ListagemDeUsuarios from "./pages/loginDeUsuarios/listagem/listagemDeUsuarios";
import LoginDeUsuarios from "./pages/loginDeUsuarios/loginDeUsuarios";


function App() {
  return ( 
    <div className="containerApp">
      <div className="App">        
        <div className="div-login" >
          <Routes>
            {/* PrimeiraRota - Login */}
            <Route path="/" element={<LoginDeUsuarios/>} />  
            {/* SegundaRota - Rotas secundárias */}
            <Route path="/cadastro" element={<CadastroDeUsuarios/>} />
            <Route path="/listagem" element={<ListagemDeUsuarios/>} />          
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
