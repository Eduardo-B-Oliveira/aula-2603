import React from 'react';
import Navbar from './components/navbar';
import Rodape from './components/rodape';
import './components/style.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <section id="home">
        <h1>Eduardo</h1>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWsGIYdUETYgf3Dpv88nJQED_2f2M8y7FKGA&s'></img>
          <h1>Guitarrista amador, estudante de DS</h1>
        </section>
      </main>
      <Rodape/>
    </div>
  );
}

export default App;
