import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Stil dosyasını ekleyebilirsiniz
import App from './App'; // App bileşeni (projenizin ana bileşeni)

// React uygulamanızın render işlemi
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // 'root' id'sine sahip div'e render edilecek
);
