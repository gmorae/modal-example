import React from 'react';
import { FiX } from "react-icons/fi";

import './style.css'

function App() {

  const abreModal = () => {
    document.getElementById('modal').classList.add('mostrar')
  }

  const fecharModal = () => {
    document.getElementById('modal').classList.remove('mostrar')
  }

  return (
    <>
      <h1 onClick={abreModal}>Clique em mim</h1>

      <div id="modal" className="modal-container">
        <div className="modal">
          <FiX color="000" size={18} onClick={() => fecharModal()} />
          <div className="content">
            <p>Olá eu sou modal</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
