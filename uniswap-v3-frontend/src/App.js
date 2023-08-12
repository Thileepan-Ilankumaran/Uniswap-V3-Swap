import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

function App() {
  const [provider, setProvider] = useState(undefined)
  const [signer, setSigner] = useState(undefined)
  const [signerAddress, setSignerAddress] = useState(undefined)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
