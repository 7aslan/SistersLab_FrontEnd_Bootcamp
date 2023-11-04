import React, { useState } from 'react';

const choices = ['taş', 'kağıt', 'makas'];

const Tas = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const handleChoice = (choice) => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    determineResult(choice, computerChoice);
  };

  const determineResult = (user, computer) => {
    if (user === computer) {
      setResult('Berabere');
    } else if (
      (user === 'taş' && computer === 'makas') ||
      (user === 'kağıt' && computer === 'taş') ||
      (user === 'makas' && computer === 'kağıt')
    ) {
      setResult('Kazandınız');
    } else {
      setResult('Bilgisayar Kazandı');
    }
  };

  return (
    <div>
      <h1>Taş Kağıt Makas Oyunu</h1>
      <div>
        <button onClick={() => handleChoice('taş')}>Taş</button>
        <button onClick={() => handleChoice('kağıt')}>Kağıt</button>
        <button onClick={() => handleChoice('makas')}>Makas</button>
      </div>
      {userChoice && computerChoice && result && (
        <div>
          <p>Siz: {userChoice}</p>
          <p>Bilgisayar: {computerChoice}</p>
          <p>Sonuç: {result}</p>
        </div>
      )}
    </div>
  );
};

export default Tas;