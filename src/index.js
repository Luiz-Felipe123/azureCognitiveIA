import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header'
import Banner from './components/Banner'
import './index.css'
import ComputerVision from './components/ComputerVision';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <Header />
        <Banner
          videoTitle={"Classificador de Comida"}
          url={"https://www.youtube.com/watch?v=9i0m08lExYQ"}
          videoDescription={"Testando se a IA reconhece o tipo de comida e suas características"}
          />
         <ComputerVision />  
        
    </div>
);


