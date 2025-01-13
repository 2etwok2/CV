import React from 'react';
import './App.css';
import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV - Ertuğrul Karaömer</h1>
      </header>

      <section className="personal-info text-box">
        <h2>Kişisel Bilgiler</h2>
        <ul>
          <li>Ad: Ertuğrul</li>
          <li>Soyad: Karaömer</li>
          <li>İletişim Bilgisi: ertugrulkaraomer13@hotmail.com</li>
        </ul>
      </section>

      <section className="education text-box">
        <h2>Eğitim Bilgileri</h2>
        <ul>
          <li>Üniversite: Kapadokya Üniversitesi</li>
          <li>Bölüm: Bilgisayar Programcılığı</li>
          <li>Mezuniyet Yılı: 2025</li>
        </ul>
      </section>

      <section className="work-experience text-box">
        <h2>İş Deneyimi</h2>
        <ul>
          <li>Şirket Adı: Zara</li>
          <li>Pozisyon: Satış Temsilcisi</li>
          <li>Çalışma Süresi: 1 Yıl</li>
        </ul>
      </section>

      <section className="skills text-box">
        <h2>Yetenekler</h2>
        <ul>
          <li>Programlama dilleri: C#, C++, Python</li>
        </ul>
      </section>

      <section className="hobbies text-box">
        <h2>Hobiler ve İlgi Alanları</h2>
        <ul>
          <li>Spor</li>
          <li>Bilgisayar</li>
          <li>Müzik dinlemek</li>
        </ul>
      </section>

      <footer className="social-media">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </footer>
    </div>
  );
}

export default App;
